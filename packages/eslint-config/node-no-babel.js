/**
 * For code that runs on node and doesn't run through babel first
 * @type {Object}
 */
module.exports = {
  extends: ["eslint:recommended", "plugin:node/recommended", "prettier"],
  rules: {
    "node/no-unpublished-require": "off",
    "node/no-extraneous-require": "off",
    "no-console": "warn",
    "no-debugger": "warn"
  }
};
