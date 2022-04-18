import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://www.logozila.ru/images/stories/virtuemart/product/23456-09544456546.jpg" alt="" />
            <div className={s.header__login}>
                {props.isAuth
                    ? <div> {props.login} <button onClick={props.logout}>log out</button> </div>
                    : <button><NavLink to={'/login'}>Login</NavLink></button>}
            </div>
        </header>

    )
}
export default Header;