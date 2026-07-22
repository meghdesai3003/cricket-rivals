import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "flag-icons/css/flag-icons.min.css";
import { CollectionProvider } from "./context/CollectionContext";
import { CoinProvider } from "./context/CoinContext";
import { PlayingXIProvider } from "./context/PlayingXIContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
     <CoinProvider>
      <CollectionProvider>
       <PlayingXIProvider>
         <App />
       </PlayingXIProvider>
      </CollectionProvider>
     </CoinProvider>
    </BrowserRouter>
  </StrictMode>
);