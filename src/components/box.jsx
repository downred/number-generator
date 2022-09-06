import React, { Component } from "react";
import "../index.css";
import NumInput from "./numInput";
import GenerateButton from './button'

class Box extends Component {
  state = {};
  render() {
    return <div className="container-main">
      <h1>Random Number Generator</h1>
      <div className="box">
        <NumInput label="Min:"></NumInput>
        <NumInput label="Max:"></NumInput>
        <GenerateButton/>
      </div>
    </div>;
  }
}

export default Box;
