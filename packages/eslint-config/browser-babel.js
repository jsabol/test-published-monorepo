/**
 * For code that runs in the browser, and is transpiled by babel first
 * @type {Object}
 */
module.exports = {
  extends: ["eslint:recommended", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2016
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": ["warn"],
    "no-debugger": ["warn"],
    curly: "error",
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "no-var": "error",
    semi: [2, "always"],
    "space-before-blocks": "warn"
  }
};
