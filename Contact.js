import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(!name || !email ? "Please fill all fields!" : `Thank you, ${name}!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br/>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <button type="submit">Submit</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
export default Contact;