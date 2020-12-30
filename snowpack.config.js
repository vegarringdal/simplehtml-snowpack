const { getConfigFileParsingDiagnostics } = require("typescript");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/",
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
    /* ... */
  },
  buildOptions: {
    clean: true,
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: "es2018",
    },
  },
};
