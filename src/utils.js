module.exports = {
  /**
   * put the repetitive letter together
   *
   * @param {String} str string needs to sort
   * @returns {Array} or str
   * @example
   * sortCharacters('sfdaffaadaafafsfed') // ["e", "ss", "ddd", "aaaaaa", "ffffff"]
   */
  sortCharacters(str) {
    if (typeof str !== 'string') {
      throw new Error('input should be String!')
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
   * getPseudorandom([1,2,3,4,5,6]) //not equal [1,2,3,4,5,6]
   */
  getPseudorandom(arr) {
    return arr.sort(() => Math.random() - 0.5)
  },

  /**
   * delete the last `0` when a number calls toFixed
   *
   * @param {Number} num
   * @param {Number} precise
   * @returns {String}
   * @example
   * toFixedNoLast0(12.230, 4) //"12.23"
   */
  toFixedNoLast0(number, precise) {
    if (typeof number !== 'number') {
      throw new Error('input should be Number!')
    }
    return number.toFixed(precise).replace(/\.?0+$/, '')
  },

  /**
   * camel to hyphen
   *
   * @param {String} str
   * @returns {String}
   * @example
   * camelToHyphen('camelToHyphen') // "camel-to-hyphen"
   */
  camelToHyphen(str) {
    if (typeof str !== 'string') {
      throw new Error('input should be String')
    }
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
  hyphenToCamel(str) {
    if (typeof str !== 'string') {
      throw new Error('input should be String')
    }
    return str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())
  }
}
