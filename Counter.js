// import React, { useState } from "react";//Slip9

// // Counter component
// function Counter({ initial }) {
//   // Use state, initialize from a prop
//   const [count, setCount] = useState(initial);

//   // Function to increase count
//   const increment = () => {
//     setCount(count + 1);
//   };

//   // Function to decrease count
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div style={{ textAlign: "center", margin: "20px" }}>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement} style={{ marginLeft: "10px" }}>
//         Decrement
//       </button>
//     </div>
//   );
// }

// export default Counter;

import {useState} from 'react';


function Counter({initial}){
    const[count,setCount]=useState(initial);
    const increment=(()=>{
        setCount(count+1);
    });
    const decrement=(()=>{
        setCount(count-1);
    });

  return(
    <div style={{textAlign:"center"}}>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} style={{marginLeft:"20px"}}>Decrement</button>

    </div>
  )
  }export default Counter;