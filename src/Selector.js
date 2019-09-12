import React from "react";

function calcRectProps(startPos, currPos) {
  const { sx, sy } = startPos;
  const { cx, cy } = currPos;

  return {
    top: String(Math.min(sy, cy)),
    left: String(Math.min(sx, cx)),
    height: String(Math.abs(sy - cy)),
    width: String(Math.abs(sx - cx)),  
  }
}

function Selector({ startPos, currPos }) {
  let { top, left, height, width } = calcRectProps(startPos, currPos);

  const selectorStyle = {
    position: 'absolute',
    top: top,
    left: left,
    border: '1px dashed blue',
    height: height,
    width: width,
  }

  return (
    <div>
      <div style={selectorStyle} />
    </div>  
  )
}

export default Selector;
