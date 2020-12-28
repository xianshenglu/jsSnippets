/**
 * @module camelToHyphen
 * @description camel to hyphen
 * @param {String} str
 * @returns {String}
 * @example
 * camelToHyphen('camelToHyphen') // "camel-to-hyphen"
 */
function camelToHyphen(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

export default camelToHyphen;
