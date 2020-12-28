import _reduceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/reduce';
import _Object$entries from '@babel/runtime-corejs3/core-js-stable/object/entries';

/**
 * @module serializeObj
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
function serializeObj(obj, transformer) {
  var _context;

  let reducer = (re, [key, value]) => {
    if (typeof value === 'undefined' || value === null || re + value === re) {
      return re;
    }

    re += `${key}=${value}&`;
    return re;
  };

  if (typeof transformer === 'function') {
    reducer = (re, [key, value]) => {
      const result = transformer(key, value);

      if (result === false) {
        return re;
      }

      re += `${result}&`;
      return re;
    };
  }

  return _reduceInstanceProperty(_context = _Object$entries(obj)).call(_context, reducer, '').replace(/&$/, '');
}

export default serializeObj;
