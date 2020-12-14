const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

function excludeNodeModulesExcept(modules) {
  let pathSep = path.sep
  if (pathSep === '\\')
    // must be quoted for use in a regexp:
    pathSep = '\\\\'
  const moduleRegExps = modules.map(function (modName) {
    return new RegExp(`node_modules${pathSep}${modName}`)
  })

  return function (modulePath) {
    if (/node_modules/.test(modulePath)) {
      for (let i = 0; i < moduleRegExps.length; i++)
        if (moduleRegExps[i].test(modulePath)) return false
      return true
    }
    return false
  }
}
const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [],
  resolve: {
    // alias: {
    //   // enable import on demand
    //   'js-snippets': 'js-snippets/dist/index.min.mjs',
    // },
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
        // enable babel-polyfill for js-snippets
        exclude: excludeNodeModulesExcept(['js-snippets']),
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
