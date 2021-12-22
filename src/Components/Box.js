import React, { Component } from "react";
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offOn: "off",
      color: "white",
    };
  }
  toggle = () => {
    this.state.offOn === "on"
      ? this.setState({ offOn: "off", color: "white" })
      : this.setState({ offOn: "on", color: "yellow" });
  };

  render() {
    return (
      <>
    
        <div
          id="box"
          onClick={this.toggle}
          style={{ background: this.state.color }}
        >
          {this.state.offOn}
        </div>
      </>
    );
  }
}
export default Box;
