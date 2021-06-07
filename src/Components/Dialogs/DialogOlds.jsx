import moduleStyle from './Dialogs.module.css';
import React from 'react'
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={moduleStyle.dialogs}>
            <div className={moduleStyle.dialogsItem}>
                <DialogItem />
            </div>
            <div className={moduleStyle.messageItem}>
                <Messages />
            </div>
        </div>
    );
}

export default Dialogs;