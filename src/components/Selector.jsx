import React from 'react';

function calcRectProps(startPos, currPos) {
  const { sx, sy } = startPos;
  let { cx, cy } = currPos;

  // manually find canvas edges in case canvas size and/or position change
  const { top, left, bottom, right } = document.getElementsByClassName('canvas')[0].getBoundingClientRect();

  // set selector within canvas
  cx = cx < left ? left : cx;
  cx = cx > right ? right - 2 : cx; // -2 to avoid overlap with border + give visually consistency with top/left
  cy = cy < top ? top : cy;
  cy = cy > bottom ? bottom - 2 : cy; // -2 to avoid overlap with border + give visually consistency with top/left

  // draw selector starting from top-left, using height and width to determine size
  return {
    top: String(Math.min(sy, cy)),
    left: String(Math.min(sx, cx)),
    height: String(Math.abs(sy - cy)),
    width: String(Math.abs(sx - cx)),
  };
}

function Selector({ startPos, currPos }) {
  const { top, left, height, width } = calcRectProps(startPos, currPos);

  // inline styling since styling depends on component calculations
  const selectorStyle = {
    position: 'absolute',
    top,
    left,
    border: '1px dashed blue',
    height,
    width,
  };

  return (
    <div style={selectorStyle} />
  );
}

export default Selector;
