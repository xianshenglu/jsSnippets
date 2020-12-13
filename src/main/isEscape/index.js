/**
 * @description detect if user presses Escape key, just demonstrate how to handle keyCode compatibility
 * @param {Event} event
 * @returns {Boolean}
 */
export default function isEscape(event) {
  // https://caniuse.com/#search=code IE/Edge 18 doesn't support event.code
  return (
    event.code === 'Escape' || event.keyCode === 27 || event.key === 'Escape'
  )
}
