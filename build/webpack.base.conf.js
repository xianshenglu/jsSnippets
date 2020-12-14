const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].umd.min.js',
    path: path.resolve(__dirname, '../dist/'),
    library: 'jsSnippets',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.mjs', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
}
