import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const nav = useNavigate();

  return (
    <div>
    
      <input onChange={(e) => setId(e.target.value)} placeholder="User id" /><br/>
      <button onClick={() => nav(`/user/${id}`)}>Login</button>
    </div>
  );
}
export default Login;















