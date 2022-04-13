import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push({ id: i, num: i })
    }
    console.log(props.users);

    return (
        <div className={s.wrap__users}>
            <div className={s.pages__number}>
                {pages.map(p => {
                    return <span key={p.id}
                        className={props.currentPage === p.num ? s.selected__page : s.num__page}
                        onClick={() => props.onPageChanged(p.num)}>{p.num}</span>
                })}
            </div>
            {props.users.map(u => <div className={s.users__info} key={u.id}>
                <div className={s.user__card}>
                    <div className={s.photo}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' />
                        </NavLink>
                    </div>
                    <div >
                        <h5 className={s.user__name}>{u.name}</h5>
                        <div>{u.status || 'no status'}</div>
                        <div>{!u.location ? 'Country: country no read ' : `Country: ${u.location.country}`}</div>
                        <div>{!u.location ? 'City: city no read ' : `City: ${u.location.city}`}</div>
                    </div>
                </div>

                <div >
                    {u.followed
                        ? <button className={s.user__button} disabled={props.toggleFollowing.some(el => el === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button className={s.user__button} disabled={props.toggleFollowing.some(el => el === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
                </div>
            </div>

            )}
        </div>
    )
}
export default Users