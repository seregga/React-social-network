let initialState = {
    navBarName: [
        { id: 1, path: '/profile', name: 'Profile' },
        { id: 2, path: '/dialogs', name: 'Dialogs' },
        { id: 3, path: '/users', name: 'Users' },
        { id: 4, path: '/music', name: 'Music' },
        { id: 5, path: '/settings', name: 'Settings' },
        { id: 6, path: '/news', name: 'News' },
    ],
}

const sideBarReducer = (state = initialState, action) => {
    return state;
}
export default sideBarReducer;