import React from "react";
import moduleStyle from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return <div className={moduleStyle.content}>
        <ProfileInfo/>
        <MyPosts postsArray={props.state.postsArray}/>
    </div>
}

export default Profile;