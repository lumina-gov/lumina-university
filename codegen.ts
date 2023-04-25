import type { CodegenConfig } from "@graphql-codegen/cli"
import dotenv from "dotenv"
dotenv.config()

const config: CodegenConfig = {
  schema: process.env.PUBLIC_GRAPH_ENDPOINT,
  emitLegacyCommonJSImports: false,
  documents: [
    "src/**/*.ts",
    "src/**/*.svelte"
  ],
  generates: {
    "src/lib/gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
        scalars: {
          Uuid: "string"
        }
      }
    }
  }
}

export default config