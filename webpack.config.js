const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const options = {};
module.exports = {
  entry: {
    index: './src/index.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new WebpackManifestPlugin(options),
    new ESLintPlugin(options),
  ],
  output: {
    filename: '[name].js',
    /* eslint-disable */
    path: path.resolve(__dirname, "dist"),
    clean: true,
    /* eslint-disable */
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: "development",
};
