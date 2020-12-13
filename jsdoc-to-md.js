const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')
jsdoc2md
  .render({ files: 'src/utils/index.js' })
  .then((res) => fs.writeFile('spec/utils.md', res, {}, function () {}))
jsdoc2md
  .render({ files: 'src/web/index.js' })
  .then((res) => fs.writeFile('spec/web.md', res, {}, function () {}))
