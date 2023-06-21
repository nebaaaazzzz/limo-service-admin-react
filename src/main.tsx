import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthContextProvider from "./context/AuthContext";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App />
        <ToastContainer />
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
