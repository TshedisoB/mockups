import React from "react";
import Profile from "./Profile";
import { about } from "../data/info";

function About() {
  return (
    <div className="Profile-about">
      <Profile />
      <div className="About">
        <h3>About Me:</h3>
        <div className="About-container">
          <p>{about.value}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
