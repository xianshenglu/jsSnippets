# Collection For Awesome Code

## Target

Hope to collect the best code for our daily use.

## Code

- Find the letter with the most repetitions.

```js
let str = `sfdaffadfafsfed`
let arr = str
  .split('')
  .sort()
  .join('')
  .match(/(.)\1*/gu)
  .sort((a, b) => (a.length < b.length ? 1 : -1))[0]
```

- Pseudorandom

```js
let arr = [1, 2, 3, 4, 5]
arr.sort(v => Math.random() - 0.5)
```

- Get the last item from Array

```js
let arr = [1, 2, 3, 4, 5]
let lastItem
lastItem = arr.slice().pop()
// if you don't care about the origin arr you can use code below
lastItem = arr.pop()
```

- try on `JSON.parse`

```js
function tryJsonParse(...jsonTexts) {
  let jsonArr = jsonTexts.map(jsonText => {
    let obj = {}
    try {
      return JSON.parse(jsonText) || {}
    } catch (e) {
      return { text: (text = jsonText) }
    }
  })
  return jsonArr.length === 1 ? jsonArr[0] : jsonArr
}
tryJsonParse('sss') //{text: "sss"}
tryJsonParse('{"s":"a"}') // {s: "a"}
```

- clear array

```js
let arr = [1, 2, 3]
arr.length = 0
//or
arr.splice(0, arr.length)
```

- `toFixed` without last `0`

```js
function toFixed(num, precise) {
  let number = Number(num)
  if (Number.isInteger(number)) {
    return number
  }
  return number.toFixed(precise).replace(/0+$/, '')
}
```

- `closest` with destination

```js
function closest(el, selector, destination = document.documentElement) {
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
```

- DOM selector `$`

```js
function $(selector, parentNode = document) {
  return Array.from(parentNode.querySelectorAll(selector))
}
```

- get element relative position offset to event

```js
function getElOffsetToEvent(event, el) {
  let boundingClientRect = el.getBoundingClientRect()
  return {
    left: event.clientX - boundingClientRect.left,
    top: event.clientY - boundingClientRect.top,
    right: boundingClientRect.right - event.clientX,
    bottom: boundingClientRect.bottom - event.clientY
  }
}
```

- camel to hyphen

```js
function camelToHyphen(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
camelToHyphen('camelToHyphen') //"camel-to-hyphen"
```

- hyphen to camel

```js
function hyphenToCamel(str) {
  return str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())
}
hyphenToCamel('hyphen-to-camel') //"hyphenToCamel"
```

## Hint

- Before you add some code **please make sure that is the best code you can find**. And we may try to talk about it if there is any solutions better before adding.

- If you have any solutions better for any code which has been added please let me know and I would appreciate it.
