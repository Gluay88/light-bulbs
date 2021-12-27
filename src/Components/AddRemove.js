import React, { Component } from 'react'
import Box from './Box';
import './AddRemove.css'


class AddRemove extends Component {

        constructor(props) {
            super(props);
            this.state = { 
               lightsGroup : []
             }
        }
     
addButton = () => {
let array = [...this.state.lightsGroup]
array.push(<Box />)
this.setState({ lightsGroup : array})  
}


removeButton = () => {
    let array = [...this.state.lightsGroup]
    array.pop()
    this.setState({ lightsGroup : array})  
}


    render() {
        console.log(this.state.lightsGroup);
        return (
            <>
            <div id="buttons">
                <button onClick={this.addButton} className="add-remove-button">ADD (&#x1f4a1;)</button>
                <button onClick={this.removeButton} className="add-remove-button">REMOVE (&#x1f4a1;)</button>   
            </div>
            {this.state.lightsGroup}
            </>
        )
    }
}

export default AddRemove
