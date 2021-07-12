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
    contentBase: './',
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
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
    resolve: {
      root: path.resolve(__dirname, 'src'),
      extensions: ['', '.js', '.jsx'],
    },
  },
  mode: 'development',
};
