import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';


let User = ({ user, toggleFollowing, follow, unfollow }) => {
    return (
        <div className={s.users__info} key={user.id}>
            <div className={s.user__card}>
                <div className={s.photo}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' />
                    </NavLink>
                </div>
                <div >
                    <h5 className={s.user__name}>{user.name}</h5>
                    <div>{user.status || 'no status'}</div>
                    <div>{!user.location ? 'Country: country no read ' : `Country: ${user.location.country}`}</div>
                    <div>{!user.location ? 'City: city no read ' : `City: ${user.location.city}`}</div>
                </div>
            </div>

            <div >
                {user.followed
                    ? <button className={s.user__button} disabled={toggleFollowing.some(el => el === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>
                    : <button className={s.user__button} disabled={toggleFollowing.some(el => el === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>
                }
            </div>
        </div>

    )
}
export default User