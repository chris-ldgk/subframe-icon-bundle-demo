/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUBFRAME_ICON_TYPE: "eager" | "experimental_lazy";
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
