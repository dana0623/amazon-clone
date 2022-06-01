module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    "ecmaVersion": 9,
    "requireConfigFile": false,
  },
  rules: {
    quotes: ["error", "double"],
  },
};
