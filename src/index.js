import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {observerFunction} from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addDialog, addPost, updateNewDialogText, updateNewPostText} from "./Redux/State";

let rerenderEntireTree = (state) => {
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

rerenderEntireTree(state);

observerFunction(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
