import { Routes, Route, Navigate,Link } from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Range from "./Range";
import logoImage from "../images/logo2.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import Footer from "./Footer";

const App = () => {
  return (
    <>
      
       <nav className="navbar rounded p-3 ">
        <img src={logoImage} alt="logo"  />
        <h1 className="Heading">Welcome to Electricity Reducer</h1>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
        <Link to="/home" className="btn btn-primary">Home</Link>
        <Link to="/calculator" className="btn btn-primary">Calculator</Link>
        <Link to="/range" className="btn btn-primary">Range</Link>
      </div>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/range" element={<Range />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
