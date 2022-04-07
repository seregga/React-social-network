import { usersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you', name: 'Vasa', likesCount: '30' },
        { id: 2, message: 'Im fine, sanks', name: 'Lena', likesCount: '52' },
        { id: 3, message: 'Hi', name: 'Slava', likesCount: '14' },
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                name: 'Slava',
                likesCount: 288
            }
            stateCopy = {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy = {
                ...state,
                newPostText: action.text
            };
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state

    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, text: text }
};
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })


// thunk
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(r => {
            dispatch(setUserProfile(r.data))
        })
}



export default profileReducer;