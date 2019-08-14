module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    "semi": [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "no-trailing-spaces": "error",
    "@typescript-eslint/no-unused-vars": "error"
  }
}