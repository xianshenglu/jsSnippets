/**
 * @description calculate the max size child can be without change respect ratio
 * @param {{width:Number,height:Number}} parentRect parent container size
 * @param {{width:Number,height:Number}} childRect child container size
 * @param {string} [mode='contain'] calculate by contain or cover, which is similar to background-size values
 * @returns {{width,height,offsetX,offsetY}} target child size
 * @example
 * calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200}) //{width:25,height:100,offsetX:75,offsetY:0}
 * calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200},'cover') //{width:100,height:400,offsetX:0,offsetY:-300}
 */
function calcSizeWithRespectRatio(parentRect, childRect, mode = 'contain') {
  const holderWid = parentRect.width;
  const holderHei = parentRect.height;
  const targetWid = childRect.width;
  const targetHei = childRect.height;
  const widthScaleRatio = holderWid / targetWid;
  const heightScaleRatio = holderHei / targetHei;
  const targetRespectRatio = targetWid / targetHei;
  const calcOnHeight = {
    width: holderHei * targetRespectRatio,
    height: holderHei,
    offsetX: holderWid - holderHei * targetRespectRatio,
    offsetY: 0
  };
  const calcOnWidth = {
    width: holderWid,
    height: holderWid / targetRespectRatio,
    offsetX: 0,
    offsetY: holderHei - holderWid / targetRespectRatio
  };

  switch (mode) {
    case 'contain':
      return widthScaleRatio > heightScaleRatio ? calcOnHeight : calcOnWidth;

    case 'cover':
      return widthScaleRatio > heightScaleRatio ? calcOnWidth : calcOnHeight;
  }
}

export default calcSizeWithRespectRatio;
