import React, { useState } from "react";
import Login from "./Login";
import Admin from "./Admin";
import User from "./User";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [page, setPage] = useState("home");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const handleLogin = (name, designation) => {
    const role = designation.toLowerCase().trim();

    if (role === "admin" || role === "user") {
      setPage(role);
      setName(name);
      setDesignation(role);
    } else {
      alert("Invalid designation. Enter admin or user.");
    }
  };

  return (
    <div>
      {/* HOME */}
      {page === "home" && (
        <>
          <Header />
          <h1>Welcome to Our Learning App</h1>
          <button
            className="home-login-btn"
            onClick={() => setPage("login")}
          >
            Login
          </button>
          <Footer />
        </>
      )}

      {/* LOGIN */}
      {page === "login" && <Login onLogin={handleLogin} />}

      {/* ADMIN */}
      {page === "admin" && (
        <Admin
          name={name}
          d={designation}
          logout={() => setPage("home")}
        />
      )}

      {/* USER */}
      {page === "user" && (
        <User
          name={name}
          d={designation}
          logout={() => setPage("home")}
        />
      )}
    </div>
  );
};

export default Home;
