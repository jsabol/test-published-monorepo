const path = require("path");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");

module.exports = withSass(
  withTM({
    cssModules: true,
    transpileModules: ["@jsabol/design-system"]
  })
);
