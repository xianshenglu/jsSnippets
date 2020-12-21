const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [],
  resolve: {},
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
        // enable babel-polyfill for js-snippets
        // exclude: excludeNodeModulesExcept(['js-snippets']),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
module.exports = (env, arg2) => {
  // undo the comment below to see the result of tree shake more clearly
  if (arg2.analyze) {
    config.plugins.push(new BundleAnalyzerPlugin())
  }
  return config
}
