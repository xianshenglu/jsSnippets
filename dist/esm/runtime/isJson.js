/**
 * @module isJson
 * @description detect whether the string can be called with JSON.parse
 * @param {string} jsonText
 * @returns {boolean}
 * @example
 * isJson('str') //false
 *
 * isJson('{"name":"test","value":1}') //true
 */
function isJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

export default isJson;
