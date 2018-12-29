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
   * @param {*} obj
   * @returns {Boolean}
   * @example
   * isObject(new RegExp()) //true
   * isObject('') //false
   */
  isObject(obj) {
    let type = typeof obj
    return obj !== null && (type === 'object' || type === 'function')
  },
  /**
   * @description detect if it is a narrow object
   * @param {*} obj
   * @returns {Boolean}
   * @example
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
  /**
   * @description execute state[property[.property.[...]]] = data
   * @param {Object} state
   * @param {{path:String,data:*}} param
   * @example
   * replaceProperty({a:{b:{c:1}}},{path:'a.b.c',data:2})// {a:{b:{c:2}}}
   * replaceProperty({a:{b:{c:[1,2,3]}}},{path:'a.b.c.1',data:1}) // {a:{b:{c:[1,1,3]}}}
   */
  replaceProperty(state, { path, data }) {
    path = path.split('.')
    let terminalProp = path.pop()
    let target = path.reduce((re, key) => {
      return re[key]
    }, state)
    target[terminalProp] = data
    return state
  },
  /**
   * @description put nested children in one dimension
   * @param {Array} array
   * @param {string} [children='children'] key name of children
   * @returns {Array}
   * @example
   * flattenArr([{value:'1',children:[{value:'1.1',children:[{value:'1.1.1'}]},{value:'1.2',children:[{value:'1.2.1',children:[]}]}]}]) //[{value:'1',...},{value:'1.1',...},{value:'1.1.1',...},{value:'1.2',...},{value:'1.2.1',...}]
   */
  flattenArr(array, childrenKey = 'children') {
    function iterator(arr, res) {
      return arr.reduce((re, obj) => {
        re.push(obj)
        let children = obj[childrenKey]
        if (Array.isArray(children)) {
          iterator(children, re)
        }
        return re
      }, res || [])
    }
    return iterator(array)
  },
  /**
   * @description add error handler when using JSON.parse()
   * @param {*} jsonText
   * @param {string} [errorPropertyName='error']
   * @param {*} [valueForNull={ [errorPropertyName]: null }]
   * @returns {Object} new Object, with the original text saved in errorPropertyName
   * @example
   * tryJsonParse('str') //{error:'str'}
   * tryJsonParse(null,null) //{'null':null}
   * tryJsonParse(null,null,null) //null
   * tryJsonParse('{"name":"test","value":1}') //{name: "test", value: 1}
   */
  tryJsonParse(
    jsonText,
    errorPropertyName = 'error',
    valueForNull = { [errorPropertyName]: null }
  ) {
    try {
      return JSON.parse(jsonText) || valueForNull
    } catch (e) {
      return { [errorPropertyName]: jsonText }
    }
  },
  /**
   * @description calculate the max size child can be without change respect ratio
   * @param {{width:Number,height:Number}} parentRect parent container size
   * @param {{width:Number,height:Number}} childRect child container size
   * @param {string} [mode='contain'] calculate by contain or cover, which is similar to background-size values
   * @returns {{width,height,offsetX,offsetY}} target child size
   * @example
   * calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200}) //{width:25,height:100,offsetX:75,offsetY:0}
   * calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200},'cover') //{width:100,height:400,offsetX:0,offsetY:-300}
   */
  calcSizeWithRespectRatio(parentRect, childRect, mode = 'contain') {
    let holderWid = parentRect.width
    let holderHei = parentRect.height
    let targetWid = childRect.width
    let targetHei = childRect.height

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
  },
  /**
   * @description detect if obj is an element or document
   * @param {*} obj
   * @returns {Boolean}
   * @example
   * isElement(document) // true
   * isElement(document.documentElement) // true
   * isElement(document.createElement('svg')) // true
   * isElement(document.createDocumentFragment()) // false
   * isElement([]) // false
   */
  isElement(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return false
    }
    let prototypeStr, prototype
    do {
      prototype = Object.getPrototypeOf(obj)
      // to work in iframe
      prototypeStr = Object.prototype.toString.call(prototype)
      // '[object Document]' is used to detect document
      if (
        prototypeStr === '[object Element]' ||
        prototypeStr === '[object Document]'
      ) {
        return true
      }
      obj = prototype
      // null is the terminal of object
    } while (prototype !== null)
    return false
  }
}
