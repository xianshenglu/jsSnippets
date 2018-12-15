module.exports = {
  /**
   * put the repetitive letter together
   *
   * @param {String} str string needs to sort
   * @returns {Array} or str
   * @example
   * sortCharacters('sfdaffaadaafafsfed') // ["e", "ss", "ddd", "aaaaaa", "ffffff"]
   */
  sortCharacters (str) {
    if (typeof str !== 'string') {
      throw new Error('params would be string!')
    }
    if (str === '') {
      return ['']
    }
    return str
      .split('')
      .sort()
      .join('')
      .match(/(.)\1*/gu)
      .sort((a, b) => a.length - b.length)
  },

  /**
   * sort array randomly
   *
   * @param {Array} arr
   * @returns {Array} another random array
   * @example
   * getPseudorandom([1,2,3,4]) // [....]
   */
  getPseudorandom (arr) {
    return arr.sort(v => Math.random() - 0.5)
  },

  /**
   * delete the last `0` when a number calls toFixed
   *
   * @param {Number} num
   * @param {Number} precise
   * @returns {String}
   * @example
   * toFixed(12.230, 4) //"12.23"
   */
  toFixed (num, precise) {
    let number = Number(num)
    if (Number.isInteger(number)) {
      return number
    }
    return number.toFixed(precise).replace(/0+$/, '')
  },

  /**
   * camel to hyphen
   *
   * @param {String} str
   * @returns {String}
   * @example
   * camelToHyphen('camelToHyphen') // "camel-to-hyphen"
   */
  camelToHyphen (str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase()
  },

  /**
   * hyphen to camel
   *
   * @param {String} str
   * @returns {String}
   * @example
   * hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
   */
  hyphenToCamel (str) {
    return str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())
  }
}
