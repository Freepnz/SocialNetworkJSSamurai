import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addDialog, addPost, updateNewDialogText, updateNewPostText} from "./Redux/State";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                addDialog={addDialog}
                updateNewPost = {updateNewPostText}
                updateNewDialog = {updateNewDialogText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
