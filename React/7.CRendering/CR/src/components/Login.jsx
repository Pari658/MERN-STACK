import React, { useState } from "react";
import "./style.css";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name, designation);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="admin / user"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />

          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
