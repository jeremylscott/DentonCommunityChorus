import React from "react";
import NavBar from "../NavBar/NavBar";
import "./about.css";
import postoakdrive from '../../images/PostOakDrive.png'

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="about">
        <div className="aboutCont">
          <span className="au">About Us</span>
          <img src={postoakdrive} className='church-pic'/>
          <p className="mid">
            Since 1970, the Denton Community Chorus has been striving to present
            quality choral music to the Denton community. The Denton Community
            Chorus is supported in part by a grant from the Greater Denton Arts
            Council, The Arts Guild of Denton, the City of Denton, The Texas
            Commission on the Arts, The National Endowment for the Arts, and by
            members of this community. Our mission is to educate the members in
            the art and technique of fine choral music and to offer this
            opportunity to all adults of the Greater Denton area, and to provide
            the community at large opportunities to experience fine choral
            music. The Denton Community Chorus is open to all adults who would
            like to join. Come sing with us soon!
          </p>
        </div>
      </div>
    </div>
  );
}
