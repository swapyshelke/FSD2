import { useState } from "react";
import React from 'react'

function Slip17() {
    const[isSign,setSignIn]=useState(false);

  return (
    <div style={{
        textAlign:"center",
    }}>
        <h1>
            {isSign?"Hello,Welcome in Home Page":"Please sign in first"}
        </h1>
       <button onClick={()=>setSignIn(true)}>Sign In</button>
       <button onClick={()=>setSignIn(false)} style={{
        marginLeft:"10px",
       }}>Sign out</button>


    </div>
  );
}

export default Slip17;