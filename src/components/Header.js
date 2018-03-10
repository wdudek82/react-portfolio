import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navActive1 = {
    color: 'orange',
    fontWeight: 700,
    textDecoration: 'none',
  }

  const navActive2 = {
    color: 'purple',
    fontWeight: 700,
    textDecoration: 'none',
  }

  const navActive3 = {
    color: 'red',
    fontWeight: 700,
    textDecoration: 'none',
  }

  return (
    <div>
      <h1>Portfolio</h1>
      <NavLink exact to="/" activeStyle={navActive1}>Home</NavLink>
      <NavLink to="/portfolio" activeStyle={navActive2}>Portfolio</NavLink>
      <NavLink to="/contact" activeStyle={navActive3}>Contact</NavLink>
    </div>
  )
};

export default Header;