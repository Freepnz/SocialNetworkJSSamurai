import MyPosts from './MyPosts/MyPosts';
import moduleStyle from './Profile.module.css';
import React from "react";

const Profile = () => {
    return (
        <div>
            <img className='ava' alt='' src='https://prikolnye-kartinki.ru/img/picture/Jul/29/4c5943fd1d525977d6f401abb678b4ac/7.jpg'></img>
            <div>Ava + discription</div>
            <MyPosts />
        </div>
    );
}

export default Profile;