import React from "react";
import './style.css'
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Our Learning App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
