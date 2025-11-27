//


// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Home from "./Home";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  // protected route
  const ProtectedRoute = ({ children }) => {
    if (!isAuth) return <Navigate to="/login" replace />;
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home setIsAuth={setIsAuth} />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}



//


// Login.jsx
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);      // mock authentication
    navigate("/home");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}


//

// Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);      // remove authentication
    navigate("/login");
  };

  return (
    <div>
      <h2>Home (Protected Page)</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}



