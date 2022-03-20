const { build } = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

build({
  entryPoints: ["packages/paki/src/index.ts"],
  bundle: true,
  platform: "neutral",
  outfile: "packages/paki/dist/browser.js",
  plugins: [nodeExternalsPlugin()],
});
