import React from "react";
import s from "./header.css";
import MenuItem from "./componens/menuItem/menuItem";

function Header(props) {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <p>
            <a href="#">Velocity</a>
          </p>
        </div>
        <div className="menu">
          <MenuItem menu="Home" />
          <MenuItem menu="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Header;
