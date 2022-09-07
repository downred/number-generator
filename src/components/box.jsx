import React, { useState } from "react";
import "../index.css";
import NumInput from "./numInput";
import GenerateButton from './button'

function Box() {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10)
    const [random, setRandom] = useState(0)

    const handleMinValue = (value) => {
      setMin(currentVal => currentVal = value)
      console.log(min)
    }

    const handleMaxValue = (value) => {
      setMax(currentVal => currentVal = value)
      console.log(max)
    }

    const handleRandom = () => {
      setRandom(Math.floor(Math.random() * (max - min + 1) + min))
      console.log(random)
    }

    return <div className="container-main">
      <h1>Random Number Generator</h1>
      <div className="box">
        <NumInput label="Min:" value={min} onChange={handleMinValue}></NumInput>
        <NumInput label="Max:" value={max} onChange={handleMaxValue}></NumInput>
        <span>{random}</span>
        <GenerateButton onClick={handleRandom}/>
      </div>
    </div>;


}

export default Box;
