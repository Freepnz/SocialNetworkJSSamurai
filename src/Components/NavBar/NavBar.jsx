import moduleStyle from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
        <nav className={moduleStyle.nav}>
            <div className={moduleStyle.item}>
                <NavLink to='/profile' activeClassName={moduleStyle.activeLink}>Profile</NavLink>
            </div>
            <div className={moduleStyle.item}>
                <NavLink to='/dialogs' activeClassName={moduleStyle.activeLink}>Message</NavLink>
            </div>
            <div className={moduleStyle.item}>
                <NavLink to='/news' activeClassName={moduleStyle.activeLink}>News</NavLink>
            </div>
            <div className={moduleStyle.item}>
                <NavLink to='/music' activeClassName={moduleStyle.activeLink}>Music</NavLink>
            </div>
            <div className={moduleStyle.item}>
                <NavLink to='/settings' activeClassName={moduleStyle.activeLink}>Settings</NavLink>
            </div>

        </nav>
    );
}

export default NavBar;
