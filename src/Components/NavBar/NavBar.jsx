import moduleStyle from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={moduleStyle.nav}>
            <div className={moduleStyle.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={moduleStyle.item}>
                <a href='/dialogs'>Message</a>
            </div>
            <div className={`${moduleStyle.item} ${moduleStyle.active}`}>
                <a href='/news'>News</a>
            </div>
            <div className={moduleStyle.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={moduleStyle.item}>
                <a href='/settings'>Settings</a>
            </div>

        </nav>
    );
}

export default NavBar;
