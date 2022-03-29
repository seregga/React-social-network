import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

// const setActive = ({ isActive }) => isActive ? 'active-link' : '';
const NavBar = (props) => {
    let navLinkElement =
        props.sideBar.map((el) => {
            return <div className={s.item} key={el.id}><NavLink to={el.path} >{el.name}</NavLink></div>
        })
    return (
        <nav className={s.nav}>
            {navLinkElement}
        </nav>
    )
}

export default NavBar;