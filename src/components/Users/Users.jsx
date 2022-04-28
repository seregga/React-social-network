import React from 'react';
import s from './Users.module.css';
import Paginator from './../common/Paginator/Paginator';
import User from './User';


let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    return (
        <div className={s.wrap__users}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} pageSize={pageSize} />

            {users.map(u => <User key={u.id}
                user={u}
                toggleFollowing={props.toggleFollowing}
                follow={props.follow}
                unfollow={props.unfollow} />
            )}
        </div>
    )
}
export default Users