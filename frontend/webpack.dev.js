const path = require("path");

const { HotModuleReplacementPlugin } = require("webpack");

const common = require("./webpack.common");

const { merge } = require("webpack-merge");

const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    //Allows update react components in real time
    new HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
  ],
  //Config for webpack-dev-server module
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "build"),
    hot: true,
    port: 3000,
    host: "127.0.0.1",
    overlay: {
      error: true,
      warning: true,
    },
  },
});
