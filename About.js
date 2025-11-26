import { useState } from "react";

function About() {
  const [info, setInfo] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>About Page</h1>
      <input 
        placeholder="Enter about yourself" 
        value={info} 
        onChange={e => setInfo(e.target.value)} 
      />
      <button onClick={() => setMsg(info ? `You entered: ${info}` : "Please enter something!")}>
        Submit
      </button>
      <p>{msg}</p>

      
    </div>
  );
}
export default About;




