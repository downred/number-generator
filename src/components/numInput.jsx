import React, { Component } from 'react';

class NumInput extends Component { 
    render() { 
        return (
           <div className='input-container'>
            <label for="number">{this.props.label}</label>
            <input type="number" id="number" value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)} min="0"/>
           </div> 
        );
    }
}
 
export default NumInput;