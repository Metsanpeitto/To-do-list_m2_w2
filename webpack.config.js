const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/.dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Wbpack Exercise',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
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
  },
  output: {
    filename: 'bundle.js',
    /* eslint-disable */
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
