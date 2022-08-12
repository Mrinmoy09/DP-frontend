import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointments</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div class="navbar bg-base-100 pb-0 mb-0">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 mb-0 p-0 shadow bg-base-100 rounded-box w-25">
      {menuItems}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl ml-4">Doctors Portal</a>
  </div>
  <div class="navbar-center hidden lg:flex px-14">
    <ul class="menu menu-horizontal px-10 ml-14">
    {menuItems}
    </ul>
  </div>
  
</div>
    );
};

export default NavBar;