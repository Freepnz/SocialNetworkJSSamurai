import moduleStyle from './../Dialogs.module.css';
import React from 'react'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={moduleStyle.dialogs + ' ' + moduleStyle.active}>
            <img src={props.ava} alt='' ></img>
            <NavLink to={'/dialogs/' + props.id}><p>{props.name}</p></NavLink>
        </div>
    );
}

export default DialogItem;