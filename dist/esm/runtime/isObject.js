/**
 * @description detect if it is a generalized object
 * @param {*} obj
 * @returns {Boolean}
 * @example
 * isObject(new RegExp()) //true
 * isObject('') //false
 */
function isObject(obj) {
  const type = typeof obj;
  return obj !== null && (type === 'object' || type === 'function');
}

export default isObject;
