import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ElementContext from "./context/ElementContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ElementContext>
        <App />
      </ElementContext>
    </BrowserRouter>
  </StrictMode>
);
