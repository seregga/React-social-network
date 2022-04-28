import { usersAPI } from './../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TOGGLE_FOLLOWING = 'SET_TOGGLE_FOLLOWING';


let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    toggleFollowing: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USER_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_TOGGLE_FOLLOWING: {
            return {
                ...state,
                toggleFollowing: action.boolean
                    ? [...state.toggleFollowing, action.userId]
                    : state.toggleFollowing.filter(userId => userId !== action.userId)
            }
        }
        default:
            return state

    }
}
export const followSaccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSaccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USER_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setToggleFollowing = (boolean, userId) => ({ type: SET_TOGGLE_FOLLOWING, boolean, userId });

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage)) // костыль(что бы не делать thunk для onPageChanged из UsersContainer)

        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(setToggleFollowing(true, userId))
        const r = await usersAPI.postFollow(userId)
        dispatch(setToggleFollowing(false, userId))
        if (r.data.resultCode === 0) {
            dispatch(followSaccess(userId))
        }
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(setToggleFollowing(true, userId))
        const r = await usersAPI.deleteFollow(userId)
        dispatch(setToggleFollowing(false, userId))
        if (r.data.resultCode === 0) {
            dispatch(unfollowSaccess(userId))
        }
    }
}

export default usersReducer;