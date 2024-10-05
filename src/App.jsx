import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      
        <Navbar />
        {/* <div className="content"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        {/* </div> */}
    
    </BrowserRouter>
  );
}

export default App;
