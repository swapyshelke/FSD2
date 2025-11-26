// create sign-in and sign-out functionality using useStaet
// when sign in btn clicked then display msg, "hello, welcome in Home Page"
// and sign out btn clicked then diaplay "please sign in first"


import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // false = signed out

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sign-In / Sign-Out Example</h2>

      <button onClick={handleSignIn} style={{ marginRight: "10px" }}>
        Sign In
      </button>

      <button onClick={handleSignOut}>Sign Out</button>

      <h3 style={{ marginTop: "30px" }}>
        {isLoggedIn ? "Hello, welcome in Home Page" : "Please sign in first"}
      </h3>
    </div>
  );
}

export default App;
