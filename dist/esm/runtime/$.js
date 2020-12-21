import _Array$from from '@babel/runtime-corejs3/core-js-stable/array/from';

/**
 * @description imitate DOM selector`$` in jQuery
 * @param {String} selector
 * @param {Node} [parentNode=document]
 * @returns {Array} array with target nodes
 */
function $(selector, parentNode = document) {
  return _Array$from(parentNode.querySelectorAll(selector));
}

export default $;
