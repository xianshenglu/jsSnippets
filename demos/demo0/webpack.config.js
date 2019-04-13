const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const optimization = {
  minimize: true,
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: false,
        output: {
          beautify: true
        }
      }
    })
  ]
}
const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
module.exports = (env, arg2) => {
  // undo the comment below to see the result of tree shake more clearly
  // config.optimization = optimization
  return config
}
