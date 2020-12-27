/**
 * @module isLandscape
 * @description detect whether the screen orientation is landscape
 * @returns {Boolean}
 */
export default function isLandscape() {
  const screenOrientation = (
    window.screen.orientation ||
    window.screen.msOrientation /* win8 IE11 */ ||
    window.screen.mozOrientation ||
    {}
  ).type
  if (typeof screenOrientation === 'string') {
    return !!screenOrientation.toLowerCase().match(/landscape/)
  }
  if ('orientation' in window && typeof window.orientation === 'number') {
    /* @deprecated */
    return Math.abs(window.orientation) === 90
  }
  /* impotent api */
  return window.innerWidth > window.innerHeight
}
