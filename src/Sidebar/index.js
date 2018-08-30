import React, { Component } from "react";
import "../style.css";

//components
import Contact from "../Contact";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img
          className="cardPic"
          src="https://media.licdn.com/dms/image/C4E03AQEsuH6Dao8u1g/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=wE88GhXWIH_fdYLiL6y__aDqJWqBX3FpCljiyJzPe7I"
          alt="Troy"
        />
        <h1>Troy Smith</h1>
        <p className="title">Software Engineer</p>
        <p>New York, NY</p>
        <p>
          <Contact />
        </p>
      </div>
    );
  }
}

export default Sidebar;
