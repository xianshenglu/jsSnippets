/**
 * @description delete the last `0` when a number calls toFixed
 * @param {Number} num
 * @param {Number} precise
 * @returns {String}
 * @example
 * toFixedNoLast0(12.230, 4) //"12.23"
 */
export default function toFixedNoLast0(number, precise) {
  return number.toFixed(precise).replace(/\.?0+$/, '')
}
