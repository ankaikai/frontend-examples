import React from 'react';
import classes from './Header.module.scss';
import logo from './../../images/Cat2.jpg';
const Header = (props) => {
    return (
        <header className={classes.header}>
        <div>
          <a href="/">
          <img src={logo} />
          </a>         
        </div>
        <h1 className={classes.head}><a href="">SOCIAL</a></h1>
      </header>
    );
}
export default Header;
