import React from 'react';
import classes from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/messages/*${props.id}`;
    return (
        <div className={classes.dialogItems}>
            <NavLink to={path} className={(navData) => navData.isActive ? classes.activeLink : classes.dialogLink}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;