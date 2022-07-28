import React from 'react';
import MessageItem from './../Messages/MessageItem/MessageItem';
import DialogItem from './../Messages/DialogItem/DialogItem';
import classes from './Messages.module.scss';

const Messages = (props) => {
    let dialogElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
    let messageElements = props.messagesData.map(message => <MessageItem id={message.id} message={message.message} />)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messageItems}>
                {messageElements}
            </div>
        </div>

    );
}

export default Messages

