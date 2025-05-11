import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql", // TODO: use env var
  documents: "./src/graphql/**/*.graphql",
  generates: {
    "./src/graphql/generated/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        reactQueryVersion: 5,
        addSuspenseQuery: true,
        legacyMode: false,
        useTypeImports: true,
        fetcher: "../fetcher#fetcher",
        reactQuery: {
          useQuery: true,
          useMutation: true,
        },
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
