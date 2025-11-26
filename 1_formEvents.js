// import React, { useState } from "react";

// function Slip1() {
//   const [data, setData] = useState({ username: "", password: "" });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//     console.log("onChange", e.target.name, e.target.value);
//   };

//   const handleInput = (e) => {
//     console.log("onInput", e.target.name, e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted data:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Login</h2>

//       <input
//         name="username"
//         placeholder="Username"
//         value={data.username}
//         onInput={handleInput}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         value={data.password}
//         onInput={handleInput}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Slip1;

import {useState} from 'react'
function Slip1() {
    const[data,setData]=useState({username:(''), password:('')});
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log("onChange",e.target.name,e.target.value)
    };
    const handleInput=(e)=>{
        console.log("onInput",e.target.name,e.target.value)
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("login Successfully",data)
    };
    return(
        <form onSubmit={handleSubmit} style={{textAlign:"center" , marginTop:"50px"}}>
            <h1>Login</h1>
            <input name='username'
            placeholder='username'
            value={data.username}
            onChange={handleChange}
            onInput={handleInput}/><br/>


           <input name='password'
           placeholder='password'
           value={data.password}
           onChange={handleChange}
           onInput={handleInput}/><br/>

           <button onClick={handleSubmit}>submit</button>
        </form>
    )
}
export default Slip1;
