import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { InvoiceProvider } from "./context/InvoiceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InvoiceProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </InvoiceProvider>
  </React.StrictMode>,
);
