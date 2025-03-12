// AlertContext.tsx
"use client";
import Alert from "@/components/Alert";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AlertContextProps {
  alert: boolean;
  showAlert: (type: string, message: string) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FunctionComponent<AlertProviderProps> = ({
  children,
}) => {
  const [alert, setAlert] = useState<boolean>(false);
  const [type, setType] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const showAlert = (type: string, message: string) => {
    setAlert(true);
    setType(type);
    setMessage(message);
    setTimeout(() => {
      hideAlert();
    }, 5000);
  };

  const hideAlert = () => {
    setAlert(false);
    setType("");
    setMessage("");
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {alert && <Alert type={type} message={message} />}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useTheme must be used within a AlertProvider");
  }
  return context;
};
