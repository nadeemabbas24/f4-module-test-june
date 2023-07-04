import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="nav">
        <h2>HOME</h2>
      </NavLink>
      <Outlet />
    </div>
  );
}

export default Navbar;
