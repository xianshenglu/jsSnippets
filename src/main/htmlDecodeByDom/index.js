/**
 * @description decode user input to show original text
 * @param {String} text user input value
 * @returns {String} decoded text
 * @example
 * htmlDecodeByDom('&lt;script&gt;&lt;/script&gt;') //<script></script>
 */
export default function htmlDecodeByDom(html) {
  let div = document.createElement('div')
  div.innerHTML = html
  return div.textContent
}
