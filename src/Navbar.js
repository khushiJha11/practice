// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li><a href="#E-Learning">E-Learning</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#community">Community</a></li>
        <li><button className="enroll-button">Enroll Now</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
