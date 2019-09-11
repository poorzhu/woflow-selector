import React from "react";

class Canvas extends React.Component {
  constructor() {
    super();

    this.state = {
      startPos: null,
      currPos: {},
      isDown: false,
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
    const { isDown } = this.state;

    if (!isDown) {
      this.setState({ 
        isDown: !isDown,
        startPos: {
          x: e.x,
          y: e.y,
        } 
      }, () => {
        // console.log(this.state)
      });
    } else {
      this.setState({ 
        isDown: !isDown,
        startPos: null,
      }, () => {
        // console.log(this.state)
      });
    }
  }

  changePos(e) {
    const { isDown } = this.state;

    if (isDown) {
      this.setState({ currPos: { x: e.x, y: e.y } }, () => {
        // console.log(this.state)
      });
    }
  }

  render() {
    const { isDown } = this.state;

    let selector;

    if (isDown) {
      selector = (
        <div className="selector" >
        </div>
      )
    }

    return (
      <div className="canvas">

      </div>
    )
  }
}

export default Canvas;