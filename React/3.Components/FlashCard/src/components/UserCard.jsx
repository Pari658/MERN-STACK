import React from "react";
import "./style.css";
import photo from "../assets/photo.jpg"

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-image">
        <img
          src={photo}
          alt="User"
        />
      </div>

      <div className="user-info">
        <h3>Pari Patel</h3>
        <p>Web Developer</p>
        <p>Python Developer</p>
      </div>
    </div>
  );
};

export default UserCard;
