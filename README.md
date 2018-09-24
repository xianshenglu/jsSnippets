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

## Hint

- Before you add some code **please make sure that is the best code you can find**. And we may try to talk about it if there is any solutions better before adding.

- If you have any solutions better for any code which has been added please let me know and I would appreciate it.
