import React from 'react';
import { NavLink } from 'react-router-dom';

const navlink = {
  padding: '12px',
  margin: '0 12px 0 0',
  background: '#ffa5ea',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: '#333'
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" style={navlink} activeStyle={{background: '#f72ec5'}}>Home</NavLink>
      <NavLink exact to="/movies" style={navlink} activeStyle={{background: '#f72ec5'}}>Movies</NavLink>
      <NavLink exact to="/directors" style={navlink} activeStyle={{background: '#f72ec5'}}>Directors</NavLink>
      <NavLink exact to="/actors" style={navlink} activeStyle={{background: '#f72ec5'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
