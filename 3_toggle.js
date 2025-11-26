import React, { useState } from 'react';

function Slip3(){
    const[isOn,setIsOn]=useState(false)
    const handleToggle=()=>{
        setIsOn((prev)=>!prev);
    }

return (
    <div style={{
       textalign:"center"}}>
        <h1>{isOn?"This is ON":"This is OFF"}</h1>
        <button onClick={handleToggle}style={{
            color:"black",
            height:"40px",
            width:"80px"}}>Toggle</button>
    </div>
  )
}

export default Slip3