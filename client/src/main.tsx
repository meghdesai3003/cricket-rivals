import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "flag-icons/css/flag-icons.min.css";
import { CollectionProvider } from "./context/CollectionContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <CollectionProvider>
       <App />
    </CollectionProvider>
    </BrowserRouter>
  </StrictMode>
);