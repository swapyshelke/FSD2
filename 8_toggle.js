import React, { useState } from 'react';

function Slip8() {
    const[isOn,setIsOn]=useState(false);
    const handleToggle=()=>{
        setIsOn((prev)=>!prev);
    }
  return (
    <div style={{
        backgroundColor:isOn?"green":"yellow",
        height:"400px",
        width:"1000px",
        textAlign:"center",
    }}>
    <h1>{isOn?"ON":"OFF"}</h1>
    <button onClick={handleToggle} style={{
    color:"black",
    height:"40px",
    width:"80px",
    }}>Toggle</button>
    </div>
  );
}
export default Slip8;