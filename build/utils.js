const fs = require('fs')

function getInputFiles() {
  return fs.readdirSync('./src/main').reduce((re, filename) => {
    re[filename] = `./src/main/${filename}`
    return re
  }, {})
}

module.exports = { getInputFiles }
