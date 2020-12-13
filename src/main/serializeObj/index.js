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

export default function serializeObj(obj, transformer) {
  let reducer = (re, [key, value]) => {
    if (typeof value === 'undefined' || value === null || re + value === re) {
      return re
    }
    re += `${key}=${value}&`
    return re
  }
  if (typeof transformer === 'function') {
    reducer = (re, [key, value]) => {
      const result = transformer(key, value)
      if (result === false) {
        return re
      }
      re += `${result}&`
      return re
    }
  }
  return Object.entries(obj).reduce(reducer, '').replace(/&$/, '')
}
