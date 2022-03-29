import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push({ id: i, num: i })
    }

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
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>
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