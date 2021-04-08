import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <div className="">
    <NavLink to="/">
      <img
        src="https://ed.team/static/images/logo/logo-premium-alt.svg"
        className="main-logo"
        alt="logo"
      />
    </NavLink>
  </div>
);

export default Logo;
