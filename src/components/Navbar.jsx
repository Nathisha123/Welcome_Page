import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <h3 className="Logo">Nathisha.</h3>
      <nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
