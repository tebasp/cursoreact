import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => (
  <nav className="main-menu" id="main-menu">
    <ul>
      <li>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/courses" activeClassName="active">
          Cursos
        </NavLink>
      </li>
      <li>
        <NavLink to="/form" activeClassName="active">
          Formulario
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" activeClassName="active">
          Users
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Menu;
