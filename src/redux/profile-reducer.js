import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you', name: 'Vasa', likesCount: '30' },
        { id: 2, message: 'Im fine, sanks', name: 'Lena', likesCount: '52' },
        { id: 3, message: 'Hi', name: 'Slava', likesCount: '14' },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.post,
                name: 'Slava',
                likesCount: 288
            }
            stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
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
        case DELETE_POST: { // for test
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        }
        default:
            return state

    }
}

export const addPostActionCreator = (post) => ({ type: ADD_POST, post });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })// for test
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })// for test


// thunk
export const getUserProfile = (userId) => async (dispatch) => {
    const r = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(r.data))
}
// thunk
export const getStatus = (userId) => async (dispatch) => {
    const r = await profileAPI.getStatus(userId)
    dispatch(setStatus(r.data))
}
// thunk
export const updateStatus = (status) => async (dispatch) => {
    const r = await profileAPI.updateStatus(status)
    if (r.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
// thunk
export const savePhoto = (file) => async (dispatch) => {
    const r = await profileAPI.savePhoto(file)
    if (r.data.resultCode === 0) {
        dispatch(savePhotoSuccess(r.data.data.photos))
    }
}

export default profileReducer;