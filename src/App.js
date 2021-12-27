import React, { Component } from 'react'
import Box from './Components/Box';
import AddRemove from './Components/AddRemove';
import './App.css'
import Bulbs from './Components/Bulbs.js'

class App extends Component{
  render(){
    return(
      <>
      <div id="container">
      <h1>&#128516; Eureka!! &#128525;</h1>
      <AddRemove />
      </div>  
     </>
    )
  }
}
export default App
