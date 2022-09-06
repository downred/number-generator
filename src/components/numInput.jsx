import React, { Component } from 'react';

class NumInput extends Component { 
    render() { 
        return (
           <div className='input-container'>
            <label for="number">{this.props.label}</label>
            <input type="number" id="number"/>
           </div> 
        );
    }
}
 
export default NumInput;