import React from "react";
import moduleStyle from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return <div className={moduleStyle.content}>
        <ProfileInfo/>
        <MyPosts
            //postsArray={props.profilePage.postsArray}
                 postsArray={props.profilePage.postsArray}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}/>
    </div>
}

export default Profile;