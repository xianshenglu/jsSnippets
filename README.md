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

## Hint

- Before you add some code **please make sure that is the best code you can find**. And we may try to talk about it if there is any solutions better before adding.

- If you have any solutions better for any code which has been added please let me know and I would appreciate it.
