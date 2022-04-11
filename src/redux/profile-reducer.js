import { usersAPI, profileAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you', name: 'Vasa', likesCount: '30' },
        { id: 2, message: 'Im fine, sanks', name: 'Lena', likesCount: '52' },
        { id: 3, message: 'Hi', name: 'Slava', likesCount: '14' },
    ],
    newPostText: '',
    profile: null,
    status: ''
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
        case SET_STATUS: {
            return {
                ...state, status: action.status
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
export const setStatus = (status) => ({ type: SET_STATUS, status })


// thunk
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(r => {
            dispatch(setUserProfile(r.data))
        })
}
// thunk
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(r => {
            dispatch(setStatus(r.data))
        })
}
// thunk
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(r => {
            if (r.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}



export default profileReducer;