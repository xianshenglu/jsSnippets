/**
 * @description encode user input to avoid evil script
 * @param {String} text user input value
 * @returns {String} encoded text
 * @example
 * htmlEncodeByDom('<script></script>') //&lt;script&gt;&lt;/script&gt;
 */
function htmlEncodeByDom(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export default htmlEncodeByDom;
