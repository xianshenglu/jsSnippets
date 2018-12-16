/**
 * @module domUtils
 */
module.exports = {
  /**
   * @description imitate DOM selector`$` in jQuery
   * @param {String} selector
   * @param {Node} [parentNode=document]
   * @returns {Array} array with target nodes
   */
  $(selector, parentNode = document) {
    return Array.from(parentNode.querySelectorAll(selector))
  },
  /**
   * @description get element relative position offset to event
   * @param {Event} event
   * @param {HTMLElement} el
   * @returns {Object} {left:Number,right:Number,top:Number,bottom:Number}
   */
  getElOffsetToEvent(event, el) {
    let boundingClientRect = el.getBoundingClientRect()
    return {
      left: event.clientX - boundingClientRect.left,
      top: event.clientY - boundingClientRect.top,
      right: boundingClientRect.right - event.clientX,
      bottom: boundingClientRect.bottom - event.clientY
    }
  }
}
