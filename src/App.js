import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import './App.css';
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
/*                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}*/
                        />}/>
                    <Route path='/dialogs' render={() =>
                        <Dialogs
                            dialogPage={props.state.dialogPage}
                            dispatch={props.dispatch}
                            //newDialogText={props.state.dialogPage}
                        />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
            }
        </BrowserRouter>)
}
export default App;