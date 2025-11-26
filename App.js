
// import Slip8 from "./Slip8";//it is also answer of slip3 q2
//import Slip2 from "./Slip2";
// import Slip1 from "./Slip1";
// import Slip18 from "./Slip18";//
//import Slip19 from './Slip19';
// import Slip3 from "./Slip3";
// import Slip7 from "./Slip7";
// import Slip11 from "./Slip11";
// import Slip14 from "./Slip14";
// import Slip15 from "./Slip15";
// import Slip17 from "./Slip17";
import Counter from "./Counter";//slip 9
// import Slip10 from "./Slip10";
// import Slip21 from "./Slip21";


// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";//Slip4 
// import Home from "./Home";//4
// import About from "./About";//4
// import Contact from "./Contact";//4


// import React from "react";//Slip5
// import { BrowserRouter,Routes,Route } from "react-router-dom";//5
// import Slip5 from "./Slip5";
// import NotFound from "./NotFound";//5



// import { BrowserRouter,Routes,Route } from "react-router-dom";//Slip20
// import Login from "./Login";//20
// import User from "./User";//20
function App() {
  return (
    <>
    {/* <BrowserRouter> //4
      <nav style={{ margin: "10px" }}>
        <center>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
        </center>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter> */}


    {/* <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Slip5 />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    
    </BrowserRouter> */}

    {/* <BrowserRouter>//20
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
    </BrowserRouter> */}
  <Counter initial={0}/>
  {/* <Slip21/> */}
  </>
    
  );
}
export default App;












