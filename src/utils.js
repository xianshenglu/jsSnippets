//* Find the letter with the most repetitions.
// sortCharacters('sfdaffaadaafafsfed')// ["aaaaaa", "ffffff"]
// sortCharacters('sfdaffaadaafafsfedg', false)// ["g", "e"]
function sortCharacters (str) {
  if (typeof str !== 'string') {
    return null
  }
  if (str === '') {
    return ''
  }
  return str
    .split('')
    .sort()
    .join('')
    .match(/(.)\1*/gu)
}

//* Pseudorandom
function getPseudorandom (arr) {
  return arr.sort(v => Math.random() - 0.5)
}

//* Get the last item from Array
// getLastItemInArr([1, 2, 3, 4, 5]) // 5
function getLastItemInArr (arr) {
  return arr.slice().pop()
}

//* `toFixed` without last`0`
// toFixed(12.230, 4)// "12.23"
function toFixed (num, precise) {
  let number = Number(num)
  if (Number.isInteger(number)) {
    return number
  }
  return number.toFixed(precise).replace(/0+$/, '')
}

//* `closest` with destination
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

//* DOM selector`$`
function $ (selector, parentNode = document) {
  return Array.from(parentNode.querySelectorAll(selector))
}

//* get element relative position offset to event
function getElOffsetToEvent (event, el) {
  let boundingClientRect = el.getBoundingClientRect()
  return {
    left: event.clientX - boundingClientRect.left,
    top: event.clientY - boundingClientRect.top,
    right: boundingClientRect.right - event.clientX,
    bottom: boundingClientRect.bottom - event.clientY
  }
}

//* camel to hyphen
// camelToHyphen('camelToHyphen') // "camel-to-hyphen"
function camelToHyphen (str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

//* hyphen to camel
// hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
function hyphenToCamel (str) {
  return str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())
}
