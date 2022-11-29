import "./index.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="navbar">
      <h2 className="logo">JH.DEV</h2>
      <div className="tab">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/" className="link">
          About
        </NavLink>
        <NavLink to="/" className="link">
          Projects
        </NavLink>
        <NavLink to="/" className="link">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
