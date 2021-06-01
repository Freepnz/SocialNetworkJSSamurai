import moduleStyle from './Profile.module.css';

const Profile = () => {
    return (
        <div className={moduleStyle.content}>
            <img alt='' src='https://prikolnye-kartinki.ru/img/picture/Jul/29/4c5943fd1d525977d6f401abb678b4ac/7.jpg'></img>
            <div>Ava + discription</div>
            <div>My post
          <div>New post</div>
                <div>
                    <div className={moduleStyle.item}> post 1</div>
                    <div className={moduleStyle.item}> post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;