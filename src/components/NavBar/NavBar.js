import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import note1 from "../../images/music-note.png";
import note2 from "../../images/musical-note.png";

export default class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      number: 0
    };

    this.musicNotes = this.musicNotes.bind(this);
  }

  componentDidMount() {
    this.musicNotes();
  }

  //changes the value of number in state to switch the position of the music notes
  musicNotes() {
    var num = 0;

    timer = timer.bind(this);

    function timer() {
      num++;
      if (num <= 5) {
        this.setState({
          number: num
        });
      } else {
        num = 0;
      }
    }
    setInterval(timer, 1000);
  }

  render() {
    let dispNote;

    switch (this.state.number) {
      case 1:
        dispNote = <img src={note1} alt="" className="position1" />;
        break;
      case 2:
        dispNote = <img src={note2} alt="" className="position2" />;
        break;
      case 3:
        dispNote = <img src={note1} alt="" className="position3" />;
        break;
      case 4:
        dispNote = <img src={note2} alt="" className="position4" />;
        break;
      case 5:
        dispNote = <img src={note1} alt="" className="position5" />;
        break;
      default:
        dispNote = <img src={note1} alt="" className="position1" />;
    }

    return (
      <div className="navCont">
        <div className="navLinks">
          <Link to="/" className="links">
            <p>Home</p>
          </Link>
          <Link to="/about" className="links">
            <p>About Us</p>
          </Link>
          <Link to="/donate" className="links">
            <p>Donate</p>
          </Link>
          <Link to="/join" className="links">
            <p>Join the Choir!</p>
          </Link>
          <Link to="/upcoming" className="links">
            <p>Upcoming Events</p>
          </Link>
          <Link to="/contact" className="links">
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="music">{dispNote}</div>
      </div>
    );
  }
}
