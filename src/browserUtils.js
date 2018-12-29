/**
 * @module browserUtils
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
   * @description implement `closest` with destination
   * @param {HTMLElement} el element to start find
   * @param {String} selector
   * @param {HTMLElement} destination where to stop query when meeting this node
   */
  closest(el, selector, destination = document.documentElement) {
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
  },
  /**
   * @description detect if obj is an element or document
   * @param {*} obj
   * @returns {Boolean}
   * @example
   * isElement(document) // true
   * isElement(document.documentElement) // true
   * isElement(document.createElement('svg')) // true
   * isElement(document.createDocumentFragment()) // false
   * isElement([]) // false
   */
  isElement(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return false
    }
    let prototypeStr, prototype
    do {
      prototype = Object.getPrototypeOf(obj)
      // to work in iframe
      prototypeStr = Object.prototype.toString.call(prototype)
      // '[object Document]' is used to detect document
      if (
        prototypeStr === '[object Element]' ||
        prototypeStr === '[object Document]'
      ) {
        return true
      }
      obj = prototype
      // null is the terminal of object
    } while (prototype !== null)
    return false
  },
  /**
   * @description detect if user presses Escape key, just demonstrate how to handle keyCode compatibility
   * @param {Event} event
   * @returns {Boolean}
   */
  isEscape(event) {
    // https://caniuse.com/#search=code IE/Edge 18 doesn't support event.code
    return (
      event.code === 'Escape' || event.keyCode === 27 || event.key === 'Escape'
    )
  },
  /**
   * @description encode user input to avoid evil script
   * @param {String} text user input value
   * @returns {String} encoded text
   * @example
   * htmlEncodeByDom('<script></script>') //&lt;script&gt;&lt;/script&gt;
   */
  htmlEncodeByDom(text) {
    let div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  },
  /**
   * @description decode user input to show original text
   * @param {String} text user input value
   * @returns {String} decoded text
   * @example
   * htmlDecodeByDom('&lt;script&gt;&lt;/script&gt;') //<script></script>
   */
  htmlDecodeByDom(html) {
    let div = document.createElement('div')
    div.innerHTML = html
    return div.textContent
  },
  /**
   * @description detect whether the screen orientation is landscape
   * @returns {Boolean}
   */
  isLandscape() {
    let screenOrientation = (
      screen.orientation ||
      screen.msOrientation /*win8 IE11*/ ||
      screen.mozOrientation ||
      {}
    ).type
    if (typeof screenOrientation === 'string') {
      return !!screenOrientation.toLowerCase().match(/landscape/)
    } else if (
      'orientation' in window &&
      typeof window.orientation === 'number'
    ) {
      /*@deprecated*/
      return Math.abs(window.orientation) === 90
    } else {
      /*impotent api*/
      return window.innerWidth > window.innerHeight
    }
  }
}
