import React from "react";
import moduleStyle from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={moduleStyle.content}>
            <ProfileInfo/>

            <MyPosts/>

        </div>
    );
}

export default Profile;