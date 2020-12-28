(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jsSnippets = {}));
}(this, (function (exports) { 'use strict';

  /**
   * @module $
   * @description imitate DOM selector`$` in jQuery
   * @param {String} selector
   * @param {Node} [parentNode=document]
   * @returns {Array} array with target nodes
   */
  function $(selector, parentNode = document) {
    return Array.from(parentNode.querySelectorAll(selector));
  }

  /**
   * @module calcSizeWithRespectRatio
   * @description calculate the max size child can be without change respect ratio
   * @param {{width:Number,height:Number}} parentRect parent container size
   * @param {{width:Number,height:Number}} childRect child container size
   * @param {string} [mode='contain'] calculate by contain or cover, which is similar to background-size values
   * @returns {{width,height,offsetX,offsetY}} target child size
   * @example
   * calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200}) //{width:25,height:100,offsetX:75,offsetY:0}
   * calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200},'cover') //{width:100,height:400,offsetX:0,offsetY:-300}
   */
  function calcSizeWithRespectRatio(parentRect, childRect, mode = 'contain') {
    const holderWid = parentRect.width;
    const holderHei = parentRect.height;
    const targetWid = childRect.width;
    const targetHei = childRect.height;
    const widthScaleRatio = holderWid / targetWid;
    const heightScaleRatio = holderHei / targetHei;
    const targetRespectRatio = targetWid / targetHei;
    const calcOnHeight = {
      width: holderHei * targetRespectRatio,
      height: holderHei,
      offsetX: holderWid - holderHei * targetRespectRatio,
      offsetY: 0
    };
    const calcOnWidth = {
      width: holderWid,
      height: holderWid / targetRespectRatio,
      offsetX: 0,
      offsetY: holderHei - holderWid / targetRespectRatio
    };

    switch (mode) {
      case 'contain':
        return widthScaleRatio > heightScaleRatio ? calcOnHeight : calcOnWidth;

      case 'cover':
        return widthScaleRatio > heightScaleRatio ? calcOnWidth : calcOnHeight;
    }
  }

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

  /**
   * @module flatFormRules
   * @param {{Array}} rules
   * @example
   * // [{"message":"field1 rule1!"},{"message":"field2 rule1!"},{"message":"field2 rule2!"}]
   * flatFormRules({ field1: [  {  message: 'field1 rule1!' } ], field2: [ {  message: 'field2 rule1!' }, {  message: 'field2 rule2!' }]})
   * @example
   * // [{"message":"field1 rule1!"},{"message":"field2 rule1!"}]
   * flatFormRules({ field1: [  {  message: 'field1 rule1!' } ], field2: [ {  message: 'field2 rule1!' }]})

   */
  function flatFormRules(rules) {
    return [].concat(...Object.values(rules));
  }

  /**
   * @module flattenChildrenDeep
   * @description put nested children in one dimension
   * @param {Array} array
   * @param {string} [children='children'] key name of children
   * @returns {Array}
   * @example
   * flattenChildrenDeep([{value:'1',children:[{value:'1.1',children:[{value:'1.1.1'}]},{value:'1.2',children:[{value:'1.2.1',children:[]}]}]}]) //[{value:'1',...},{value:'1.1',...},{value:'1.1.1',...},{value:'1.2',...},{value:'1.2.1',...}]
   */
  function flattenChildrenDeep(array, childrenKey = 'children') {
    function iterator(arr, res) {
      return arr.reduce((re, obj) => {
        re.push(obj);
        const children = obj[childrenKey];

        if (Array.isArray(children)) {
          iterator(children, re);
        }

        return re;
      }, res || []);
    }

    return iterator(array);
  }

  /**
   * @module getElOffsetToEvent
   * @description get element relative position offset to event
   * @param {Event} event
   * @param {HTMLElement} el
   * @returns {Object} {left:Number,right:Number,top:Number,bottom:Number}
   */
  function getElOffsetToEvent(event, el) {
    const boundingClientRect = el.getBoundingClientRect();
    return {
      left: event.clientX - boundingClientRect.left,
      top: event.clientY - boundingClientRect.top,
      right: boundingClientRect.right - event.clientX,
      bottom: boundingClientRect.bottom - event.clientY
    };
  }

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

  /**
   * @module isElement
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
      prototype = Object.getPrototypeOf(obj); // to work in iframe

      prototypeStr = Object.prototype.toString.call(prototype); // '[object Document]' is used to detect document

      if (prototypeStr === '[object Element]' || prototypeStr === '[object Document]') {
        return true;
      }

      obj = prototype; // null is the terminal of object
    } while (prototype !== null);

    return false;
  }

  /**
   * @module isEscape
   * @description detect if user presses Escape key, just demonstrate how to handle keyCode compatibility
   * @param {Event} event
   * @returns {Boolean}
   */
  function isEscape(event) {
    // https://caniuse.com/#search=code IE/Edge 18 doesn't support event.code
    return event.code === 'Escape' || event.keyCode === 27 || event.key === 'Escape';
  }

  /**
   * @module isLandscape
   * @description detect whether the screen orientation is landscape
   * @returns {Boolean}
   */
  function isLandscape() {
    const screenOrientation = (window.screen.orientation || window.screen.msOrientation
    /* win8 IE11 */
    || window.screen.mozOrientation || {}).type;

    if (typeof screenOrientation === 'string') {
      return !!screenOrientation.toLowerCase().match(/landscape/);
    }

    if ('orientation' in window && typeof window.orientation === 'number') {
      /* @deprecated */
      return Math.abs(window.orientation) === 90;
    }
    /* impotent api */


    return window.innerWidth > window.innerHeight;
  }

  /**
   * @module serializeObj
   * @author luxiansheng
   * @param { Object } obj
   * @param { Function } [transformer]
   * @returns { String } serialized string
   * @example
   * // returns x=1&y=2
   * serializeObj({x:1,y:2})
   * @example
   * // returns x=1
   * serializeObj({x:1,y:undefined})
   * @example
   * // returns x=1
   * serializeObj({x:1,y:null})
   * @example
   * // returns x=1
   * serializeObj({x:1,y:''})
   * @example
   * // returns x=1&y=15030230023
   * serializeObj({ x: 1, y: new Date() }, (key, value) => value instanceof Date ? key+'='+value.getTime() : key+'='+value)
   */
  function serializeObj(obj, transformer) {
    let reducer = (re, [key, value]) => {
      if (typeof value === 'undefined' || value === null || re + value === re) {
        return re;
      }

      re += `${key}=${value}&`;
      return re;
    };

    if (typeof transformer === 'function') {
      reducer = (re, [key, value]) => {
        const result = transformer(key, value);

        if (result === false) {
          return re;
        }

        re += `${result}&`;
        return re;
      };
    }

    return Object.entries(obj).reduce(reducer, '').replace(/&$/, '');
  }

  /**
   * @module toFixedNoLast0
   * @description delete the last `0` when a number calls toFixed
   * @param {Number} num
   * @param {Number} precise
   * @returns {String}
   * @example
   * toFixedNoLast0(12.230, 4) //"12.23"
   */
  function toFixedNoLast0(number, precise) {
    return number.toFixed(precise).replace(/\.?0+$/, '');
  }

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

  var index = {
    $,
    calcSizeWithRespectRatio,
    camelToHyphen,
    flatFormRules,
    flattenChildrenDeep,
    getElOffsetToEvent,
    hyphenToCamel,
    isElement,
    isEscape,
    isLandscape,
    serializeObj,
    toFixedNoLast0,
    isJson
  };

  exports.$ = $;
  exports.calcSizeWithRespectRatio = calcSizeWithRespectRatio;
  exports.camelToHyphen = camelToHyphen;
  exports.default = index;
  exports.flatFormRules = flatFormRules;
  exports.flattenChildrenDeep = flattenChildrenDeep;
  exports.getElOffsetToEvent = getElOffsetToEvent;
  exports.hyphenToCamel = hyphenToCamel;
  exports.isElement = isElement;
  exports.isEscape = isEscape;
  exports.isJson = isJson;
  exports.isLandscape = isLandscape;
  exports.serializeObj = serializeObj;
  exports.toFixedNoLast0 = toFixedNoLast0;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
