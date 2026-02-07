import React from "react";
import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        © {currentYear} Pari Patel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
