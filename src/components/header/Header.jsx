import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-pj14.png";
import "./headers.css";

function Header() {
  return (
    <header>
      <div className="header-title">
        <img src={logo} alt="logo HRnet"></img>
        <h1>HRnet</h1>
      </div>
      <nav>
        <Link to="/"> Add Employee</Link>
        <Link to="/employee"> Employee Added</Link>
      </nav>
    </header>
  );
}

export default Header;
