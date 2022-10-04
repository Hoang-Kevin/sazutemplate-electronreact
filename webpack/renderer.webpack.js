const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json'),
      extensions: [".ts", ".tsx"],
    })],
  },
  module: {
    rules: require('./rules.webpack'),
  },
}