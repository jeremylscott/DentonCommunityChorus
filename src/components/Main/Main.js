import React, { Component } from "react";
import "./main.css";
import homepic from "../../images/homePageDCC.jpg";
import NavBar from "../NavBar/NavBar";

export default class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="main-display">
          <img src={homepic} alt="" className="homepic" />
        </div>
        <div className="overlay" />
        <div className="home-text">
          <h1>Denton Community Chorus</h1>
          <button>About</button>
        </div>
        <div className="banner" />
        <div className="main-content">
          <div className="main-about">
            <h1>Denton Community Chorus</h1>
            <p>
              Since 1970, the Denton Community Chorus has been striving to
              present quality choral music to the Denton community. Our mission
              is to educate the members in the art and technique of fine choral
              music and to offer this opportunity to all adults of the Greater
              Denton area, and to provide the community at large opportunities
              to experience fine choral music.
            </p>
          </div>
          <div className="main-sidebar">
            <h1>Upcoming Events</h1>
          </div>
        </div>
      </div>
    );
  }
}
