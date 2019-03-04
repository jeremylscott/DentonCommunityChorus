import React from "react";
import "./header.css";
import header from "../../images/headPic.png";

export default function Header() {
  return (
    <div className="headCont">
      <div className="headLeft" />
      <img src={header} alt="" className="headerMain" />
      <div className="headRight" />
    </div>
  );
}
