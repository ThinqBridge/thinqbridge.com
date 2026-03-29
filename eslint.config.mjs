import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-exports": "warn",
      "perfectionist/sort-imports": [
        "warn",
        {
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-objects": "warn",
    },
  },
]);

export default eslintConfig;
