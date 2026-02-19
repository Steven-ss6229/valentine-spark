import { createContext, useContext, useState, ReactNode } from "react";

interface ValentineContextType {
  senderName: string;
  setSenderName: (name: string) => void;
  recipientName: string;
  setRecipientName: (name: string) => void;
  hasAccepted: boolean;
  setHasAccepted: (accepted: boolean) => void;
  loveMessage: string;
  setLoveMessage: (message: string) => void;
}

const ValentineContext = createContext<ValentineContextType | undefined>(undefined);

export const ValentineProvider = ({ children }: { children: ReactNode }) => {
  const [senderName, setSenderName] = useState("Your Secret Admirer");
  const [recipientName, setRecipientName] = useState("My Love");
  const [hasAccepted, setHasAccepted] = useState(false);
  const [loveMessage, setLoveMessage] = useState(
    "Every moment with you feels like a dream come true. You make my heart sing and my soul dance. Will you make me the happiest person this Valentine's Day?"
  );

  return (
    <ValentineContext.Provider
      value={{
        senderName,
        setSenderName,
        recipientName,
        setRecipientName,
        hasAccepted,
        setHasAccepted,
        loveMessage,
        setLoveMessage,
      }}
    >
      {children}
    </ValentineContext.Provider>
  );
};

export const useValentine = () => {
  const context = useContext(ValentineContext);
  if (!context) {
    throw new Error("useValentine must be used within a ValentineProvider");
  }
  return context;
};
