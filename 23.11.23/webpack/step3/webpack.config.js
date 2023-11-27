const path = require("path");

const htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
  // dev mode, build duration

  mode: "development",

  entry: "./src/index.js",

  module: {
    rules: [
      {
        // file extensions
        test: /\.(js|jsx)$/,

        exclude: /node_modules/,
        // which loader? babel-loader JSX->JS
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new htmlwebpackplugin({
      template: "src/index.html",
      filename: "index.html",
    }),
  ],

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
