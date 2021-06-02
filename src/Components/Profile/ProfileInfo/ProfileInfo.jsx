import moduleStyle from './ProfileInfo.module.css'
import React from "react";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className='ava' alt=''
                     src='https://prikolnye-kartinki.ru/img/picture/Jul/29/4c5943fd1d525977d6f401abb678b4ac/7.jpg'></img>
            </div>
            <div className={moduleStyle.descriptionBlock}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;