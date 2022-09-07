import React, { Component } from 'react';

class GenerateButton extends Component { 
    render() { 
        return (
            <button onClick={this.props.onClick}>Generate</button>
        );
    }
}
 
export default GenerateButton;