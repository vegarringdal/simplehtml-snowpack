const { getConfigFileParsingDiagnostics } = require("typescript");

process.env['BUILDTYPE'] = 'development';
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
  devOptions: {
    out:'build_dev_client',
    hmr:true,
    hmrPort:4444
  },
  buildOptions: {
    clean: true,
    watch:true,
    sourceMaps:true
  }
};
