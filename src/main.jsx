import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./contexts/ApiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ApiProvider>
        <App />
      </ApiProvider>
    </React.StrictMode>
  </BrowserRouter>
);
