let utils = {
  //* Find the letter with the most repetitions.
  // findMostOrLeastRepeatStr('sfdaffaadaafafsfed')// ["aaaaaa", "ffffff"]
  // findMostOrLeastRepeatStr('sfdaffaadaafafsfedg', false)// ["g", "e"]
  findMostOrLeastRepeatStr (str, isMost = true) {
    if (typeof str !== 'string') {
      return null
    }
    if (str === '') {
      return ''
    }
    let arr = str
      .split('')
      .sort()
      .join('')
      .match(/(.)\1*/gu)

    if (isMost) {
      arr = arr.sort((a, b) => (a.length < b.length ? 1 : -1))
    } else {
      arr = arr.sort((a, b) => (a.length < b.length ? -1 : 1))
    }
    let lengthOverflowIndex = arr.findIndex((val, index) => {
      if (index + 1 < arr.length) {
        return val.length !== arr[index + 1].length
      } else {
        return true
      }
    })
    return arr.slice(0, lengthOverflowIndex + 1)
  },

  //* Pseudorandom
  getPseudorandom (arr) {
    return arr.sort(v => Math.random() - 0.5)
  },

  //* Get the last item from Array
  // getLastItemInArr([1, 2, 3, 4, 5]) // 5
  getLastItemInArr (arr) {
    return arr.slice().pop()
  },

  //* `toFixed` without last`0`
  // toFixed(12.230, 4)// "12.23"
  toFixed (num, precise) {
    let number = Number(num)
    if (Number.isInteger(number)) {
      return number
    }
    return number.toFixed(precise).replace(/0+$/, '')
  },

  //* `closest` with destination
  closest (el, selector, destination = document.documentElement) {
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

  //* DOM selector`$`
  $ (selector, parentNode = document) {
    return Array.from(parentNode.querySelectorAll(selector))
  },

  //* get element relative position offset to event
  getElOffsetToEvent (event, el) {
    let boundingClientRect = el.getBoundingClientRect()
    return {
      left: event.clientX - boundingClientRect.left,
      top: event.clientY - boundingClientRect.top,
      right: boundingClientRect.right - event.clientX,
      bottom: boundingClientRect.bottom - event.clientY
    }
  },

  //* camel to hyphen
  // camelToHyphen('camelToHyphen') // "camel-to-hyphen"
  camelToHyphen (str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase()
  },

  //* hyphen to camel
  // hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
  hyphenToCamel (str) {
    return str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())
  }

}
window.utils = utils
export default utils
