import moduleStyle from './Dialogs.module.css';
import React from 'react'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className={moduleStyle.dialogs + ' ' + moduleStyle.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={moduleStyle.message}>{props.text}</div>
    )
}

let dialogData = [
    {id: 1, name: 'Diman'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Vera_Ivanovna'},
    {id: 4, name: 'Zakhar_1994'},
    {id: 5, name: 'Katya'}
]

let messageData = [
    {id: 1, text: 'Hi, my name is Ivan. Where are you from?'},
    {id: 2, text: 'hello, how many time?'},
    {id: 3, text: 'you are sun of beach'}
]

const Dialogs = (props) => {
    return (
        <div className={moduleStyle.dialogs}>
            <div className={moduleStyle.dialogsItem}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>
            <div className={moduleStyle.messageItem}>
                <Message text={messageData[0].text}/>
                <Message text={messageData[1].text}/>
                <Message text={messageData[2].text}/>
            </div>
        </div>
    );
}

export default Dialogs;