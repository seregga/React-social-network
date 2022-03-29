import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.item_info}>
                <img src="https://sun1-16.userapi.com/impg/c853420/v853420324/23ea75/hPtnABrPORc.jpg?size=200x0&quality=88&crop=26,6,223,223&sign=ee4e6383e90c4f3bdc001c7426813ea1&c_uniq_tag=25zS_McVfy02WMQEG-DHZr3mYLJGMTxoxeCWj0234LA&ava=1" alt="images" />
                <span > {props.name}</span>
            </div>
            <div className={s.item_message}>
                {props.message}
                <span className={s.item_like}> like {props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;