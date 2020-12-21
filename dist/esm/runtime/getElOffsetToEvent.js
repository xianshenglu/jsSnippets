/**
 * @description get element relative position offset to event
 * @param {Event} event
 * @param {HTMLElement} el
 * @returns {Object} {left:Number,right:Number,top:Number,bottom:Number}
 */
function getElOffsetToEvent(event, el) {
  const boundingClientRect = el.getBoundingClientRect();
  return {
    left: event.clientX - boundingClientRect.left,
    top: event.clientY - boundingClientRect.top,
    right: boundingClientRect.right - event.clientX,
    bottom: boundingClientRect.bottom - event.clientY
  };
}

export default getElOffsetToEvent;
