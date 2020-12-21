import _Object$getPrototypeOf from '@babel/runtime-corejs3/core-js-stable/object/get-prototype-of';

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
function isElement(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  let prototypeStr;
  let prototype;

  do {
    prototype = _Object$getPrototypeOf(obj); // to work in iframe

    prototypeStr = Object.prototype.toString.call(prototype); // '[object Document]' is used to detect document

    if (prototypeStr === '[object Element]' || prototypeStr === '[object Document]') {
      return true;
    }

    obj = prototype; // null is the terminal of object
  } while (prototype !== null);

  return false;
}

export default isElement;
