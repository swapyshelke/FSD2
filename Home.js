import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Home Page</h1>
      <input onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
        value={name} />
      
      <button onClick={() => setMsg(name ? `Hello ${name}, welcome to home page!` : "Please enter your name!")}>
        Submit
      </button>
      <p>{msg}</p>
    </div>
  );
}
export default Home;













