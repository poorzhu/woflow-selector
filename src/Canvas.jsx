import React from "react";
import Selector from './Selector';

class Canvas extends React.Component {
  constructor() {
    super();

    this.state = {
      isDown: false,
      startPos: null,
      currPos: {},
    };

    this.toggleClick = this.toggleClick.bind(this);
    this.changePos = this.changePos.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.toggleClick);
    document.addEventListener("mouseup", this.toggleClick);
    document.addEventListener("mousemove", this.changePos);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.toggleClick);
    document.removeEventListener("mouseup", this.toggleClick);
    document.removeEventListener("mousemove", this.changePos);
  }

  toggleClick(e) {
    // FIX IF MOUSE IS ALREADY CLICKED

    const { isDown } = this.state;

    if (!isDown) {
      this.setState({ 
        isDown: !isDown,
        startPos: {
          sx: e.x,
          sy: e.y,
        } 
      });
    } else {
      this.setState({ 
        isDown: !isDown,
      });
    }
  }

  changePos(e) {
    const { isDown } = this.state;

    if (isDown) {
      this.setState({ 
        currPos: { 
          cx: e.x, 
          cy: e.y,
        }
      })
    }
  }

  render() {
    const { isDown } = this.state;

    const canvasStyle = {
      height: '750px',
      width: '750px',
      border: '2px solid grey',
    }

    return (
      <div className="canvas" style={canvasStyle}>
        {isDown && <Selector {...this.state} />} 
      </div>
    )
  }
}

export default Canvas;