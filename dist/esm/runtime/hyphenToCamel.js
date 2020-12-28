/**
 * @module hyphenToCamel
 * @description hyphen to camel
 * @param {String} str
 * @returns {String}
 * @example
 * hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
 */
function hyphenToCamel(str) {
  return str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase());
}

export default hyphenToCamel;
