const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')
const rimraf = require('rimraf')

rimraf.sync('spec/**/*.*')
jsdoc2md.render({ files: 'src/main/**/index.js' }).then((res) => {
  fs.writeFile('spec/index.md', res, {}, function () {})
})
