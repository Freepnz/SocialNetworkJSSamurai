import moduleStyle from './../Dialogs.module.css';
import React from 'react'

const Messages = (props) => {
    return (
        <div className={moduleStyle.message}>{props.text}</div>
    )
}

export default Messages;