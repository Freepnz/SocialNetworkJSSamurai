import moduleStyle from './Dialogs.module.css';
import React from 'react'
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Diman'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Vera_Ivanovna'},
        {id: 4, name: 'Zakhar_1994'},
        {id: 5, name: 'Katya'}
    ]

    let messages = [
        {id: 1, text: 'Hi, my name is Ivan. Where are you from?'},
        {id: 2, text: 'hello, how many time?'},
        {id: 3, text: 'you are sun of beach'}
    ]

    let dialogsElement = dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)
    let messagesElements = messages.map(messages => <Messages text={messages.text}/>)

    return (
        <div className={moduleStyle.dialogs}>
            <div className={moduleStyle.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={moduleStyle.messageItem}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;