import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ConversationalFormContextValue = {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
};

const ConversationalFormContext = createContext<ConversationalFormContextValue | null>(null);

export function ConversationalFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = useCallback(() => {
    setIsOpen(true);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const closeForm = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== "#diagnostico") return;
    openForm();
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }, [openForm]);

  const value = useMemo(
    () => ({
      isOpen,
      openForm,
      closeForm,
    }),
    [closeForm, isOpen, openForm],
  );

  return (
    <ConversationalFormContext.Provider value={value}>{children}</ConversationalFormContext.Provider>
  );
}

export function useConversationalForm() {
  const context = useContext(ConversationalFormContext);
  if (!context) {
    throw new Error("useConversationalForm must be used within ConversationalFormProvider");
  }
  return context;
}
