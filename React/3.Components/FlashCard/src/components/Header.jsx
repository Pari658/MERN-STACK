import React from "react";
import "./style.css";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Professional Profile Card</h2>
      </div>

      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
