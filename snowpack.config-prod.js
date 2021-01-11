const { getConfigFileParsingDiagnostics } = require("typescript");

process.env['BUILDTYPE'] = 'production';
console.log(process.args)

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src_client: "/",
  },
  plugins: [
    [
      "@snowpack/plugin-build-script",
      { cmd: "postcss", input: [".css"], output: [".css"]},
    ],
    "@snowpack/plugin-dotenv",
    ["@snowpack/plugin-typescript",{args:"--project tsconfig-client.json"}]
  ],
  installOptions: {
    treeshake: true,
  },
  buildOptions: {
    out:'build_prod_client',
    clean: true,
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: "es2018",
    },
  },
};
