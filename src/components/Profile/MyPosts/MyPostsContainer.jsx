// import { React } from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPostActionCreator(post))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


// const MyPostsContaine = (props) => {
    //     let state = props.store.getState();
    //     let addPost = () => {
    //         props.store.dispatch(addPostActionCreator());
    //     }
    
    //     let updateNewPostText = (text) => {
    //         props.store.dispatch(updateNewPostTextActionCreator(text));
    //     }
    
    //     return (
    //         <MyPosts addPost={addPost}
    //             updateNewPostText={updateNewPostText}
    //             posts={state.profilePage.posts}
    //             newPostText={state.profilePage.newPostText} />
    //     )
    // }