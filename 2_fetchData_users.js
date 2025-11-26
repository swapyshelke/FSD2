import React,{useEffect,useState}from 'react';


function Slip2() {
    const[user,setUser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setUser(data))
        .catch((err)=>console.error("error by user details!",err))
    });

  return (
    <div>
        <h1> Users List</h1>
        <ul>
            {user.map((u)=>(
                <li keys={u.id}>{u.name}-{u.email}</li>
            ))}
        </ul>
    </div>
  )
}
export default Slip2;