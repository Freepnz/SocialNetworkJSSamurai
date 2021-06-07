import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/State';

/*
let postsArray = [
    {id: 1, message: 'Hi, how are you to day', likeCount: 15},
    {id: 2, message: 'This is my firs post?', likeCount: 0},
    {id: 3, message: 'It\'s second post', likeCount: 4},
    {id: 4, message: 'It\'s second post', likeCount: 11}
]

let dialogsArray = [
    {id: 1, name: 'Diman'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Vera_Ivanovna'},
    {id: 4, name: 'Zakhar_1994'},
    {id: 5, name: 'Katya'}
]

let messagesArray = [
    {id: 1, text: 'Hi, my name is Ivan. Where are you from?'},
    {id: 2, text: 'hello, how many time?'},
    {id: 3, text: 'you are sun of beach'}
]*/

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
