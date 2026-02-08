import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Admin(props) {
  return (
    <div>
      <Header />

      <h1>Hello {props.name}</h1>
      <br />
      <h1>{props.d}</h1>
    <button className="logout-btn" onClick={props.logout}>
      Log out
    </button>


      <Footer />
    </div>
  );
}

export default Admin;
