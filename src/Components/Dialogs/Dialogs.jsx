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

const Dialogs = (props) => {
    return (
        <div className={moduleStyle.dialogs}>
            <div className={moduleStyle.dialogsItem}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Oleg' id='2'/>
                <DialogItem name='Vera_Ivanovna' id='3'/>
                <DialogItem name='Zakhar_1994' id='4'/>
            </div>
            <div className={moduleStyle.messageItem}>
                <Message text='Hi, my name is Ivan. Where are you from?'/>
                <Message text='hello, how many time?'/>
                <Message text='you are sun of beach'/>
            </div>
        </div>
    );
}

export default Dialogs;