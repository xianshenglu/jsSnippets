/**
 * @description put nested children in one dimension
 * @param {Array} array
 * @param {string} [children='children'] key name of children
 * @returns {Array}
 * @example
 * flattenArr([{value:'1',children:[{value:'1.1',children:[{value:'1.1.1'}]},{value:'1.2',children:[{value:'1.2.1',children:[]}]}]}]) //[{value:'1',...},{value:'1.1',...},{value:'1.1.1',...},{value:'1.2',...},{value:'1.2.1',...}]
 */
export default function flattenArr(array, childrenKey = 'children') {
  function iterator(arr, res) {
    return arr.reduce((re, obj) => {
      re.push(obj)
      const children = obj[childrenKey]
      if (Array.isArray(children)) {
        iterator(children, re)
      }
      return re
    }, res || [])
  }
  return iterator(array)
}
