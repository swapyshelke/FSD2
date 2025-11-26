// login system to pass parameters through routes
// and diaaply the dynamic data
// e.g /user/:id should show user details


// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import UserDetails from "./UserDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/" element={<Login />} />

        {/* Dynamic route: /user/:id */}
        <Route path="/user/:id" element={<UserDetails />} />

        {/* Wrong route → 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;



// Login Page — Login.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId.trim() === "") {
      alert("Please enter user ID");
      return;
    }

    // Navigate to dynamic route
    navigate(`/user/${userId}`);
  };

  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter User ID"
          onChange={(e) => setUserId(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;





// UserDetails.js


import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h2>User Details</h2>
      <h3>User ID: {id}</h3>

      <p>This data is dynamically loaded based on the route parameter.</p>
    </div>
  );
}

export default UserDetails;




// NotFound.js


function NotFound() {
  return (
    <h1 style={{ textAlign: "center", marginTop: "50px" }}>
      404 Error - Page Not Found
    </h1>
  );
}

export default NotFound;



