const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')
const rimraf = require('rimraf')

rimraf.sync('spec/**/*.*')
const docs = jsdoc2md.renderSync({ files: 'src/main/**/index.js' })
fs.writeFileSync('spec/index.md', docs)
