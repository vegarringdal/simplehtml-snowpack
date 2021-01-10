const { getConfigFileParsingDiagnostics } = require("typescript");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/",
    packages: "/",
  },
  plugins: [
    [
      "@snowpack/plugin-build-script",
      { cmd: "postcss", input: [".css"], output: [".css"] },
    ],
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    treeshake: true,
    /* ... */
  },
  devOptions: {
    //port:8080,
    //hmr:true

  },
  buildOptions: {
    clean: true,
    watch:true
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    "@simple-html/core":"./packages/core/src",
    "@simple-html/router":"./packages/router/src",
    "@simple-html/datasource":"./packages/datasource/src",
    "@simple-html/grid":"./packages/grid/src"
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: "es2018",
    },
  },
};
