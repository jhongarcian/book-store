import React from "react";
import navs from '../mocks/navs.json'
import { NavLink } from "react-router-dom";

const Header = () => {
    const navLinks = navs.map(nav => {
        return (
        <li key={nav.id}>
            <NavLink to={nav.href}>
                {nav.name}
            </NavLink>
        </li>
        )
    })
  return (
    <header>
        <navs>
            <ul>
                {navLinks}
            </ul>
        </navs>
    </header>
  );
};
export default Header;
