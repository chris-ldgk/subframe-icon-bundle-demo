import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SubframeProvider } from "@subframe/core";

const ICON_TYPE: "eager" | "experimental_lazy" = "eager";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SubframeProvider iconType={ICON_TYPE}>
      <App />
    </SubframeProvider>
  </StrictMode>
);
