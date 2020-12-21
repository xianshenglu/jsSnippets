/**
 * @description imitate DOM selector`$` in jQuery
 * @param {String} selector
 * @param {Node} [parentNode=document]
 * @returns {Array} array with target nodes
 */
function $(selector, parentNode = document) {
  return Array.from(parentNode.querySelectorAll(selector));
}

export default $;
