// import React,{useState} from 'react';
// function Slip11()
// {
//     const[inputText,setInputText]=useState('');
//     const[reverseText,setReverseText]=useState('');
//     const[upperCase,setUpperCase]=useState('');
//     const[lowerCase,setLowerCase]=useState('');
//     const[textLength,setTextLength]=useState(0);
//     const handleInputChange =(e)=>
//     {
//         const value=e.target.value;
//         setInputText(value);
//         setReverseText(value.split('').reverse().join(''));
//         setUpperCase(value.toUpperCase());
//         setLowerCase(value.toLowerCase());
//         setTextLength(value.length);
//     };
//     return(
//         <div>
//             <h1>
//                 String Operations:
//             </h1>
//             <input type='text' value={inputText} onChange={handleInputChange} placeholder="Enter your string here"/>
//             <h3> Original string is:</h3>
//             <p> { inputText}</p>
//             <h3> Reversed string is:</h3>
//             <p> {reverseText} </p>
//             <h3>Uppercase string is:</h3>
//             <p> {upperCase}</p>
//             <h3>lowerCase string is:</h3>
//             <p> {lowerCase}</p>
//             <h3>Length of string is:</h3>
//             <p> {textLength}</p>
//         </div>
//     );
// };
// export default Slip11;


import { useState} from 'react';

function Slip11() {
    const[ip,setIp]=useState('');
    const[rev,setRev]=useState('');
    const[up,setUp]=useState('');
    const[low,setLow]=useState('');
    const[len,setLen]=useState(0);

    const handleInputChange=(e)=>{
        const value=e.target.value;

        setIp(value);
        setRev(value.split('').reverse().join(''));
        setUp(value.toUpperCase());
        setLow(value.toLowerCase());
        setLen(value.length);

    };
return (
    <div>
        <center>
        <h1>String Operation:</h1>
        <input type='text' placeholder='Enter String..' onChange={handleInputChange} value={ip}/>
        <h3>Original String</h3>
        <p>{ip}</p>
        <h3>Reverse String</h3>
        <p>{rev}</p>
        <h3>Uppercase</h3>
        <p>{up}</p>
        <h3>lowerCase</h3>
        <p>{low}</p>
        <h3>Length of String</h3>
        <p>{len}</p>
    </center>
    </div>
  );
}

export default Slip11;