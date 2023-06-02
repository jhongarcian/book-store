import React from "react";
import navs from '../mocks/navs.json'
import { NavLink } from "react-router-dom";
import './css/Header.css'

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
        <nav className="y-wrap">
            <ul>
                {navLinks}
            </ul>
        </nav>
    </header>
  );
};
export default Header;
