/**
 * @description delete the last `0` when a number calls toFixed
 * @param {Number} num
 * @param {Number} precise
 * @returns {String}
 * @example
 * toFixedNoLast0(12.230, 4) //"12.23"
 */
export function toFixedNoLast0(number, precise) {
  return number.toFixed(precise).replace(/\.?0+$/, '')
}

/**
 * @description camel to hyphen
 * @param {String} str
 * @returns {String}
 * @example
 * camelToHyphen('camelToHyphen') // "camel-to-hyphen"
 */
export function camelToHyphen(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

/**
 * @description hyphen to camel
 * @param {String} str
 * @returns {String}
 * @example
 * hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
 */
export function hyphenToCamel(str) {
  return str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())
}
/**
 * @description detect if it is a generalized object
 * @param {*} obj
 * @returns {Boolean}
 * @example
 * isObject(new RegExp()) //true
 * isObject('') //false
 */
export function isObject(obj) {
  let type = typeof obj
  return obj !== null && (type === 'object' || type === 'function')
}
/**
 * @description put nested children in one dimension
 * @param {Array} array
 * @param {string} [children='children'] key name of children
 * @returns {Array}
 * @example
 * flattenArr([{value:'1',children:[{value:'1.1',children:[{value:'1.1.1'}]},{value:'1.2',children:[{value:'1.2.1',children:[]}]}]}]) //[{value:'1',...},{value:'1.1',...},{value:'1.1.1',...},{value:'1.2',...},{value:'1.2.1',...}]
 */
export function flattenArr(array, childrenKey = 'children') {
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
}
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
export function tryJsonParse(
  jsonText,
  errorPropertyName = 'error',
  valueForNull = { [errorPropertyName]: null }
) {
  try {
    return JSON.parse(jsonText) || valueForNull
  } catch (e) {
    return { [errorPropertyName]: jsonText }
  }
}
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
export function calcSizeWithRespectRatio(
  parentRect,
  childRect,
  mode = 'contain'
) {
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
}

/**
 * @author luxiansheng
 * @param { Object } obj
 * @param { Function } [transformer]
 * @returns { String } serialized string
 * @example
 * // returns x=1&y=2
 * serializeObj({x:1,y:2})
 * @example
 * // returns x=1
 * serializeObj({x:1,y:undefined})
 * @example
 * // returns x=1
 * serializeObj({x:1,y:null})
 * @example
 * // returns x=1
 * serializeObj({x:1,y:''})
 * @example
 * // returns x=1&y=15030230023
 * serializeObj({ x: 1, y: new Date() }, (key, value) => value instanceof Date ? key+'='+value.getTime() : key+'='+value)
 */

export function serializeObj(obj, transformer) {
  let reducer = (re, [key, value]) => {
    if (typeof value === 'undefined' || value === null || re + value === re) {
      return re
    }
    re += key + '=' + value + '&'
    return re
  }
  if (typeof transformer === 'function') {
    reducer = (re, [key, value]) => {
      const result = transformer(key, value)
      if (result === false) {
        return re
      }
      re += result + '&'
      return re
    }
  }
  return Object.entries(obj)
    .reduce(reducer, '')
    .replace(/&$/, '')
}

/**
 *
 * @param {{Array}} rules
 * @example
 * // [{"message":"field1 rule1!"},{"message":"field2 rule1!"},{"message":"field2 rule2!"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1!' } ], field2: [ {  message: 'field2 rule1!' }, {  message: 'field2 rule2!' }]})
 * @example
 * // [{"message":"field1 rule1!"},{"message":"field2 rule1!"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1!' } ], field2: [ {  message: 'field2 rule1!' }]})

 */
export function flatFormRules(rules) {
  return [].concat(...Object.values(rules))
}
