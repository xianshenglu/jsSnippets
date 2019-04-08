const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const UglifyJS = require('uglify-es')
const compress = UglifyJS.default_options().compress
for (let option in compress) {
  compress[option] = false
}
compress.unused = true
const optimization = {
  minimize: true,
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress,
        mangle: false,
        output: {
          beautify: true
        }
      }
    })
  ]
}
module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // remove optimization would also work in production
  optimization
}
