// import dialogsReduser from "./dialogs-reducer";
// import profileReduser from "./profile-reducer";
// import sideBarReduser from './sidebar-reduser';


// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hi, how are you', name: 'Vasa', likesCount: '30' },
//                 { id: 2, message: 'Im fine, sanks', name: 'Lena', likesCount: '52' },
//                 { id: 3, message: 'Hi', name: 'Slava', likesCount: '14' },
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: 'Sergey' },
//                 { id: 2, name: 'Vasa' },
//                 { id: 3, name: 'Dima' },
//                 { id: 4, name: 'Lena' }
//             ],
//             messages: [
//                 { id: 1, message: 'Hi' },
//                 { id: 2, message: 'Hello' },
//                 { id: 3, message: 'Hello world' },
//                 { id: 4, message: 'Hello piople' }
//             ],
//             newMessageBody: ''
//         },
//         sideBar: {
//             navBarName: [
//                  { id: 1, path: '/profile', name: 'Profile' },
//                  { id: 2, path: '/dialogs', name: 'Dialogs' },
//                  { id: 3, path: '/users', name: 'Users' },
//                  { id: 4, path: '/music', name: 'Music' },
//                  { id: 5, path: '/settings', name: 'Settings' },
//                  { id: 6, path: '/news', name: 'News' },
//             ],
//             navBarPath: []
//         },
//     },
//     _callSubscriber() {
//         console.log('hi');
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {

//         this.getState().dialogsPage = dialogsReduser(this.getState().dialogsPage, action)
//         this.getState().profilePage = profileReduser(this.getState().profilePage, action)
//         this.getState().sideBar = sideBarReduser(this.getState().sideBar, action)

//         this._callSubscriber(this._state)
//     }
// }


// export default store;
// window.store = store;