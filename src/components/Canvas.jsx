import React from 'react';
import Selector from './Selector';
import './canvas.css';

class Canvas extends React.Component {
  constructor() {
    super();

    this.state = {
      isDown: null,
      startPos: null,
      currPos: {},
    };

    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  componentDidMount() {
    const canvasEle = document.getElementsByClassName('canvas')[0];

    canvasEle.addEventListener('mousedown', this.mouseDown); // canvas to prevent selector from being created outside of it
    document.addEventListener('mouseup', this.mouseUp);
    document.addEventListener('mousemove', this.mouseMove);
  }

  componentWillUnmount() {
    const canvasEle = document.getElementsByClassName('canvas')[0];

    canvasEle.removeEventListener('mousedown', this.mouseDown);
    document.removeEventListener('mouseup', this.mouseUp);
    document.removeEventListener('mousemove', this.mouseMove);
  }

  mouseDown(e) {
    this.setState({ 
      isDown: true,
      startPos: {
        sx: e.x,
        sy: e.y,
      },
      currPos: {}, // clear to prevent creating selector on prior position
    });
  }

  mouseUp() {
    this.setState({
      isDown: false,
    });
  }

  mouseMove(e) {
    const { isDown } = this.state;

    if (isDown) {
      this.setState({
        currPos: {
          cx: e.x,
          cy: e.y,
        },
      });
    }
  }

  render() {
    const { isDown } = this.state;

    return (
      <div className="canvas">
        {isDown && <Selector {...this.state} />}
      </div>
    );
  }
}

export default Canvas;
