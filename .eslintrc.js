/** @type {import("eslint").Linter.Config} */

module.exports = {
  ignorePatterns: ["apps/**", "packages/**", "config/**"],
  extends: ["@budget/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
