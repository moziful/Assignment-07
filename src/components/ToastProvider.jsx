"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
};

const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToastMessage("");
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const value = useMemo(
    () => ({
      showToast: (message) => setToastMessage(message),
    }),
    [],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      {toastMessage && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
