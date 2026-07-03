/**
 * Otimiza vídeos para a landing page.
 *
 * Gera por arquivo:
 *   - .webm  (VP9 — menor, carrega primeiro no Chrome/Firefox/Edge)
 *   - .mp4   (H.264 — fallback Safari/iOS)
 *   - -poster.webp (frame estático para LCP instantâneo)
 *
 * Uso:
 *   node scripts/optimize-videos.mjs          # gera em public/videos/optimized/
 *   node scripts/optimize-videos.mjs --replace # substitui originais (backup em public/videos/originals/)
 */
import { execSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
} from "node:fs";
import { basename, join } from "node:path";

const INPUT_DIR = "public/videos";
const OUTPUT_DIR = "public/videos/optimized";
const BACKUP_DIR = "public/videos/originals";
const REPLACE = process.argv.includes("--replace");

/** Cards do marquee são minúsculos — pode ir agressivo sem perder qualidade visual */
const MARQUEE = { scale: 480, crfMp4: 30, crfWebm: 32, fps: 24, label: "marquee" };
const SHOWCASE = { scale: 720, crfMp4: 28, crfWebm: 30, fps: 30, label: "showcase" };
const DEPOIMENTO = { scale: 720, crfMp4: 26, crfWebm: 28, fps: 30, label: "depoimento", audio: true };

function profileFor(file) {
  if (file.startsWith("depoimento")) return DEPOIMENTO;
  if (file.startsWith("showcase")) return SHOWCASE;
  return MARQUEE;
}

function hasFfmpeg() {
  try {
    execSync("ffmpeg -version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function formatMb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function run(cmd) {
  execSync(cmd, { stdio: "inherit", shell: true });
}

function optimizeOne(file) {
  const input = join(INPUT_DIR, file);
  const base = basename(file, ".mp4");
  const outMp4 = join(OUTPUT_DIR, `${base}.mp4`);
  const outWebm = join(OUTPUT_DIR, `${base}.webm`);
  const outPoster = join(OUTPUT_DIR, `${base}-poster.webp`);
  const p = profileFor(base);
  const before = statSync(input).size;

  console.log(`\n▶ ${file} [${p.label}] — ${formatMb(before)}`);

  const vf = `scale='min(${p.scale},iw)':-2,fps=${p.fps}`;
  const audio = p.audio ? "-c:a aac -b:a 64k" : "-an";

  run(
    `ffmpeg -y -i "${input}" -c:v libx264 -preset medium -crf ${p.crfMp4} -movflags +faststart -vf "${vf}" ${audio} "${outMp4}"`,
  );

  run(
    `ffmpeg -y -i "${input}" -c:v libvpx-vp9 -crf ${p.crfWebm} -b:v 0 -cpu-used 4 -row-mt 1 -vf "${vf}" ${p.audio ? "-c:a libopus -b:a 48k" : "-an"} "${outWebm}"`,
  );

  run(
    `ffmpeg -y -i "${outMp4}" -vframes 1 -q:v 80 "${outPoster.replace(".webp", ".jpg")}"`,
  );
  run(
    `ffmpeg -y -i "${outPoster.replace(".webp", ".jpg")}" -vf "scale='min(${p.scale},iw)':-2" -quality 82 "${outPoster}"`,
  );
  rmSync(outPoster.replace(".webp", ".jpg"), { force: true });

  const afterMp4 = statSync(outMp4).size;
  const afterWebm = statSync(outWebm).size;
  const saved = before - Math.min(afterMp4, afterWebm);

  console.log(
    `  ✓ mp4: ${formatMb(afterMp4)} | webm: ${formatMb(afterWebm)} | poster: ${formatMb(statSync(outPoster).size)}`,
  );
  console.log(`  economia: ~${formatMb(saved)} (${Math.round((saved / before) * 100)}%)`);

  return { before, after: afterMp4 + afterWebm, saved };
}

function applyOptimized(files) {
  mkdirSync(BACKUP_DIR, { recursive: true });
  for (const file of files) {
    const base = basename(file, ".mp4");
    const original = join(INPUT_DIR, file);
    const backup = join(BACKUP_DIR, file);
    if (existsSync(original) && !existsSync(backup)) {
      renameSync(original, backup);
    }
    for (const ext of [".mp4", ".webm", "-poster.webp"]) {
      const src = join(OUTPUT_DIR, `${base}${ext}`);
      const dest = join(INPUT_DIR, `${base}${ext}`);
      if (existsSync(src)) copyFileSync(src, dest);
    }
  }
  console.log(`\n✓ Originais em ${BACKUP_DIR}/ — otimizados copiados para ${INPUT_DIR}/`);
}

if (!hasFfmpeg()) {
  console.error("ffmpeg não encontrado.");
  process.exit(1);
}

if (!existsSync(INPUT_DIR)) {
  console.log(`Pasta ${INPUT_DIR} não existe.`);
  process.exit(0);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

const files = readdirSync(INPUT_DIR).filter(
  (f) => f.endsWith(".mp4") && !f.startsWith("."),
);

if (files.length === 0) {
  console.log("Nenhum .mp4 em public/videos/");
  process.exit(0);
}

if (REPLACE) {
  if (!existsSync(OUTPUT_DIR)) {
    console.error(`Pasta ${OUTPUT_DIR} não existe. Rode sem --replace primeiro.`);
    process.exit(1);
  }
  applyOptimized(files);
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const base = basename(file, ".mp4");
  const outMp4 = join(OUTPUT_DIR, `${base}.mp4`);
  if (existsSync(outMp4) && statSync(outMp4).size > 0) {
    console.log(`\n⏭ ${file} — já otimizado, pulando`);
    continue;
  }
  const { before, after } = optimizeOne(file);
  totalBefore += before;
  totalAfter += after;
}

console.log(`\n════════════════════════════════════`);
if (totalBefore > 0) {
  console.log(`Total original:  ${formatMb(totalBefore)}`);
  console.log(`Total otimizado: ${formatMb(totalAfter)} (mp4+webm)`);
}
console.log(`Arquivos em: ${OUTPUT_DIR}/`);
console.log(`\nPara aplicar: node scripts/optimize-videos.mjs --replace`);
