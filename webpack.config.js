const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "app.js",
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
