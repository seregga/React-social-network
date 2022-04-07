import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
// import { usersAPI } from '../../api/api';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push({ id: i, num: i })
    }
    console.log();

    return (
        <div className={s.wrap_users}>
            <div>
                {pages.map(p => {
                    return <span key={p.id}
                        className={props.currentPage === p.num ? s.selected_page : s.num_page}
                        onClick={() => props.onPageChanged(p.num)}>{p.num}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <div className={s.photo}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.toggleFollowing.some(el => el === u.id)} onClick={() => {
                            props.unfollow(u.id)
                            // usersAPI.deleteFollow(u.id)
                            //     .then(r => {
                            //         props.setToggleFollowing(false, u.id)
                            //         if (r.data.resultCode === 0) {
                            //             props.unfollow(u.id)
                            //         }

                            //     })
                        }}>Unfollow</button>
                        : <button disabled={props.toggleFollowing.some(el => el === u.id)} onClick={() => {
                            props.follow(u.id)
                            // usersAPI.postFollow(u.id)
                            //     .then(r => {
                            //         props.setToggleFollowing(false, u.id)
                            //         if (r.data.resultCode === 0) {
                            //             props.follow(u.id)
                            //         }

                            //     })
                        }}>Follow</button>
                    }
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>

            )}
        </div>
    )
}
export default Users