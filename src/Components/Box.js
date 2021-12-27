import React, { Component } from "react";
import Bulbs from './Bulbs';
import './Box.css';
import './Glow.js'

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offOn: "OFF",
      color: "white",
      } 
      
    };
  
  toggle = () => {
    this.state.offOn === "ON"
      ? this.setState({ offOn: "OFF", color: "white", element: " "})
      : this.setState({ offOn: "ON", color: "rgb(235, 154, 3)"});
  }
  

  render() {
    return (
     
      <div id="lightSwitch">
      <Bulbs switch={this.state.color} glowOn={this.state.offOn}/>
        <div
          id="box"
          onClick={this.toggle}
          style={{ background: this.state.color }}
        >
          {this.state.offOn}
        </div>
      
        
    </div>

     
    );
  }
}
export default Box;
