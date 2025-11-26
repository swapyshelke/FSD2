

import { useState } from "react";
import React from 'react'

function Slip5(){

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[msg,setMsg]=useState('');
     const handleSubmit=(e)=>{
           e.preventDefault();

        if(username === "Admin" && password === "Pass123"){
            console.log("Valid credentials");
            setMsg("successfully login ");
        }else{
            console.log("unauthorised access");
            setMsg("unauthorised access")
        }
    
        setUsername("");
        setPassword("");
    };
        return (
              <>
                <form onSubmit={handleSubmit}>
                

                <input type="text"
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
                placeholder="username"/>

                <input type="text"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                placeholder="password"/>

                <button type="submit">Login</button>
                <p>{msg}</p>
            

                </form>
          </>
        );
    
};

export default Slip5;