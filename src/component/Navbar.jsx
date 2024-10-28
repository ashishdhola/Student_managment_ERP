import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333' }}>
      <NavLink
        to="/"
        style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}
        activeStyle={{ fontWeight: 'bold', textDecoration: 'underline' }}
      >
        Student Page
      </NavLink>
      <NavLink
        to="/ShowStudents"
        style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}
        activeStyle={{ fontWeight: 'bold', textDecoration: 'underline' }}
      >
        Show Student
      </NavLink>
      console.log()
      
    </nav>
  );
};

export default NavBar;
