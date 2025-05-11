/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
  VITE_GRAPHQL_SCHEMA_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
