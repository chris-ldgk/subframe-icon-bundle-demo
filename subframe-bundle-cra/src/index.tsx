import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SubframeProvider } from "@subframe/core";

const ICON_TYPE: "eager" | "experimental_lazy" = "eager";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SubframeProvider iconType={ICON_TYPE}>
      <App />
    </SubframeProvider>
  </React.StrictMode>
);
