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
arr.filter(v => v.length === Math.max(...arr.map(v => v.length)))
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
// if you don't care about the arr because pop() will modify arr
lastItem = arr.pop()
```

## Hint

- Before you add some code **please make sure that is the best code you can find**. And we may try to talk about it if there is any solutions better before adding.

- If you have any solutions better for any code which has been added please let me know and I would appreciate it.
