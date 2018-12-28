/**
 * @module utils
 */
module.exports = {
  /**
   * @description put the repetitive letter together
   * @param {String} str string needs to sort
   * @returns {Array}
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
   * @description sort array randomly
   * @param {Array} arr
   * @returns {Array} array randomly sorted
   * @example
   * getPseudorandom([1,2,3,4,5,6]) //not equal [1,2,3,4,5,6]
   */
  getPseudorandom(arr) {
    return arr.sort(() => Math.random() - 0.5)
  },

  /**
   * @description delete the last `0` when a number calls toFixed
   * @param {Number} num
   * @param {Number} precise
   * @returns {String}
   * @example
   * toFixedNoLast0(12.230, 4) //"12.23"
   */
  toFixedNoLast0(number, precise) {
    return number.toFixed(precise).replace(/\.?0+$/, '')
  },

  /**
   * @description camel to hyphen
   * @param {String} str
   * @returns {String}
   * @example
   * camelToHyphen('camelToHyphen') // "camel-to-hyphen"
   */
  camelToHyphen(str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase()
  },

  /**
   * @description hyphen to camel
   * @param {String} str
   * @returns {String}
   * @example
   * hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
   */
  hyphenToCamel(str) {
    return str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())
  },
  /**
   * @description detect if it is a generalized object
   *
   * @param {*} obj
   * @returns {Boolean}
   * @example
   * isObject(new Function()) //true
   * isObject(new RegExp()) //true
   * isObject('') //false
   */
  isObject(obj) {
    return obj !== null && ['object', 'function'].includes(typeof obj)
  },
  /**
   * @description detect if it is a narrow object
   * @param {*} obj
   * @returns {Boolean}
   * @example
   * isPlainObject('') //false
   * isPlainObject(true) //false
   * isPlainObject(new Function()) //false
   * isPlainObject({}) //true
   */
  isPlainObject(obj) {
    return (
      Object.prototype.toString
        .call(obj)
        .slice(8, -1)
        .toLocaleLowerCase() === 'object'
    )
  },
  replaceProperty(state, { paths, data }) {
    let isObject = this.isObject(state)
    if (typeof paths !== 'string' || !isObject) {
      return false
    }
    paths = paths.split('.')
    let isTargetObj = true
    let target = paths.slice(0, -1).reduce((re, key, index, arr) => {
      isTargetObj = this.isObject(re[key])
      if (!isTargetObj) {
        // break the reduce
        arr.splice(index + 1)
      }
      return re[key]
    }, state)
    if (target === state || !isTargetObj) {
      return false
    }
    target[paths.pop()] = data
    return true
  },
  flattenArr(array, children = 'children') {
    function iterator(arr, res) {
      return arr.reduce((re, obj) => {
        re.push(obj)
        iterator(obj[children], re)
        return re
      }, res || [])
    }
    return iterator(array)
  },
  tryJsonParse(jsonText, errorKey = 'error', keepNull = { error: null }) {
    try {
      return JSON.parse(jsonText) || keepNull
    } catch (e) {
      return { [errorKey]: jsonText }
    }
  },
  getSizeByRespectRatios({ holderRect, targetRect, mode = 'contain' }) {
    let holderWid = holderRect.width
    let holderHei = holderRect.height
    let targetWid = targetRect.width
    let targetHei = targetRect.height

    let widthScaleRatio = holderWid / targetWid
    let heightScaleRatio = holderHei / targetHei
    let targetRespectRatio = targetWid / targetHei

    let calcOnHeight = {
      width: holderHei * targetRespectRatio,
      height: holderHei,
      offsetX: holderWid - holderHei * targetRespectRatio,
      offsetY: 0
    }
    let calcOnWidth = {
      width: holderWid,
      height: holderWid / targetRespectRatio,
      offsetX: 0,
      offsetY: holderHei - holderWid / targetRespectRatio
    }
    switch (mode) {
    case 'contain':
      return widthScaleRatio > heightScaleRatio ? calcOnHeight : calcOnWidth
    case 'cover':
      return widthScaleRatio > heightScaleRatio ? calcOnWidth : calcOnHeight
    }
  }
}
