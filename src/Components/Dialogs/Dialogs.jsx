import moduleStyle from './Dialogs.module.css';
import React from 'react'
import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Messages";
/*const DialogItem = (props) => {
    return <div className={moduleStyle.dialogs + ' ' + moduleStyle.active}>
            <NavLink to={'/dialogs/' + props.state.dialogPage.dialogsArray.id}>{props.state.dialogPage.dialogsArray.name}</NavLink>
        </div>
}

const Messages = (props) => {
    return <div className={moduleStyle.message}>{props.state.dialogPage.messagesArray.text}</div>
}*/

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsArray.map(d => <DialogItem name={d.name} id={d.id} ava={d.userAvatar}/>)
    let messagesElements = props.state.messagesArray.map(m => <Messages text={m.text}/>)

    return <div className={moduleStyle.dialogs}>
        <div className={moduleStyle.dialogsItem}>
            {dialogsElement}
        </div>
        <div className={moduleStyle.messageItem}>
            {messagesElements}
            <div className={moduleStyle.sendMessageBlock}>
                <div>
                    <textarea></textarea>
                </div>
                <span>
                    <button>Отправить сообщение</button>
                </span>
            </div>
        </div>
    </div>
}

export default Dialogs;