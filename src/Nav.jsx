import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

function Nav() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
    <nav>
      <ul className="nav-links">
        <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
        <NavLink to="/color" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Available Colours</NavLink>
       
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Nav