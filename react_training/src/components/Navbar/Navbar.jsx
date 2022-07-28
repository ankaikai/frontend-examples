import React from 'react';
import classes from './Navbar.module.scss';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
          <NavLink to="/profile" className={navData => navData.isActive ? classes.activeLink : classes.link}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" className={navData => navData.isActive ? classes.activeLink : classes.link}>
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/todolist" className={navData => navData.isActive ? classes.activeLink : classes.link} >
            ToDo List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;