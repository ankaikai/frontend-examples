import React from 'react'
import classes from './MessageItem.module.scss';

const MessageItem = (props) => {
    return (
        <div className={classes.messageItems}>
          {props.message}
        </div>
    );
}

export default MessageItem;