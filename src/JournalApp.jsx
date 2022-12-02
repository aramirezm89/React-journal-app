import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";
import { ToastContainer } from "react-toastify";

export const JournalApp = () => {
  return (
    <>
    <ToastContainer/>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};
