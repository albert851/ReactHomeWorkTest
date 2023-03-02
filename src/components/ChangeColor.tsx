import React, { useState } from "react";

function ColorChange() {
    const [color, setColor] = useState('black');

    function handlePickColor(event:any) {
      setColor(event.target.value);
    }

    return (
      <div>
        <div
          style={{
            backgroundColor: color,
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <input type="color" id="colourPicker" onChange={handlePickColor}/>
      </div>
    )
  }

export default ColorChange;