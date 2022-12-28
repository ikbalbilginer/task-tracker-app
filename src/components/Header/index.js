import React from "react";
import logo from "../../assets/logo1.png";
import "./style.scss";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" />
    </div>
  );
}

export default Header;
