/**
 * @description detect whether the screen orientation is landscape
 * @returns {Boolean}
 */
export default function isLandscape() {
  let screenOrientation = (
    screen.orientation ||
    screen.msOrientation /*win8 IE11*/ ||
    screen.mozOrientation ||
    {}
  ).type
  if (typeof screenOrientation === 'string') {
    return !!screenOrientation.toLowerCase().match(/landscape/)
  } else if (
    'orientation' in window &&
    typeof window.orientation === 'number'
  ) {
    /*@deprecated*/
    return Math.abs(window.orientation) === 90
  } else {
    /*impotent api*/
    return window.innerWidth > window.innerHeight
  }
}
