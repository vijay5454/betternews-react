import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import drizzlePlugin from "eslint-plugin-drizzle";
import eslintPrettierPlugin from "eslint-config-prettier";
import { fixupPluginRules } from "@eslint/compat";
import { plugins } from "../prettier.config";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPrettierPlugin,
  {
    plugins: {
      drizzle: fixupPluginRules(drizzlePlugin),
    },
  },
];
