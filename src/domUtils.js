/**
 * imitate DOM selector`$` in jQuery
 *
 * @param {String} selector
 * @param {Node} [parentNode=document]
 * @returns {Array} array with target nodes
 * @example
 */
function $ (selector, parentNode = document) {
  return Array.from(parentNode.querySelectorAll(selector))
}

/**
 * `closest` with destination
 *
 * @param {HTMLElement} el element to start find
 * @param {String} selector
 * @param {HTMLElement} destination where to stop query when meeting this node
 * @example
 */
function closest (el, selector, destination = document.documentElement) {
  const matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector

  while (el && el !== destination) {
    if (matchesSelector.call(el, selector)) {
      return el
    } else {
      el = el.parentElement
    }
  }
  return null
}

/**
 * get element relative position offset to event
 *
 * @param {Event} event
 * @param {HTMLElement} el
 * @returns {Object} {left:{Number},top:{Number},right:{Number},bottom:{Number}}
 * @example
 */
function getElOffsetToEvent (event, el) {
  let boundingClientRect = el.getBoundingClientRect()
  return {
    left: event.clientX - boundingClientRect.left,
    top: event.clientY - boundingClientRect.top,
    right: boundingClientRect.right - event.clientX,
    bottom: boundingClientRect.bottom - event.clientY
  }
}
