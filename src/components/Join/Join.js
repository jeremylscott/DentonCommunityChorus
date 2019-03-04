import React from "react";
import "./join.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

export default function Join() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="join">
        <div className="content">
          <div className="midCont">
            <span className="cTitle">Join the Choir!</span>
          </div>
          <div className="midSec">
            <span className="words">
              Test to see what happens as i type more i will see how well this
              is working
            </span>
            <iframe
              className="map"
              title="join"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13362.832771265437!2d-97.0792742!3d33.14303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32b96160a8423b02!2sHope+Evangelical+Lutheran+Church!5e0!3m2!1sen!2sus!4v1546705520867"
            />
            <div className="address">
              <a
                className="directions"
                href="https://www.google.com/maps/place/Hope+Evangelical+Lutheran+Church/@33.14303,-97.0792742,15z/data=!4m5!3m4!1s0x0:0x32b96160a8423b02!8m2!3d33.14303!4d-97.0792742"
              >
                Directions
              </a>
              <span className="address2">
                2550 Post Oak Dr <br />
                Corinth, TX 76210
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
