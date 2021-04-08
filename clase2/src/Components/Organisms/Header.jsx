import React from "react";

import Menu from "../Molecules/Menu";
import Logo from "../Atoms/Logo";

const Header = () => (
  <header className="container">
    <div className="row">
      <Logo />
      <Menu />
    </div>
  </header>
);

export default Header;
