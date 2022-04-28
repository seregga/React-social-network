import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount} name={p.name} key={p.id} />
    )
    const addNewPost = (value) => {
        if (value.newPostForm) {
            props.addPost(value.newPostForm);
        }
    }

    return (
        <div className={s.wrap_posts}>
            <div>My wall</div>
            <NewPostFormRedux onSubmit={addNewPost} />
            <div>
                {postsElements}
            </div>
        </div>

    )
})

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.wrap_add_post}>
            <Field component='textarea' name='newPostForm' placeholder='Enter you post' className={s.textarea} cols="30" rows="2" />
            <button className={s.button}>Add post</button>
        </form>
    )
}

const NewPostFormRedux = reduxForm({ form: 'NewPostForm' })(NewPostForm)

export default MyPosts;