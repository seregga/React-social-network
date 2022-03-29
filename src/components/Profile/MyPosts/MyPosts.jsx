import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount} name={p.name} key={p.id} />
    )
    let newPostElement = React.createRef();

    let onAddPost = () => {
        if (props.newPostText !== '') {
            props.addPost();
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={s.wrap_posts}>
            <div className={s.wrap_add_post}>
                <textarea ref={newPostElement}
                    className={s.textarea}
                    value={props.newPostText}
                    onChange={onPostChange}
                    cols="30" rows="2" />

                <button onClick={onAddPost} className={s.button} >Add post</button>

            </div>
            <div>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;