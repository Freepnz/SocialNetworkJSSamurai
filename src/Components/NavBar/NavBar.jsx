import moduleStyle from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={moduleStyle.nav}>
            <div className={moduleStyle.item}>
                <a>Profile</a>
            </div>
            <div className={moduleStyle.item}>
                <a>Message</a>
            </div>
            <div className={`${moduleStyle.item} ${moduleStyle.active}`}>
                <a>News</a>
            </div>
            <div className={moduleStyle.item}>
                <a>Music</a>
            </div>
        </nav>
    );
}

export default NavBar;