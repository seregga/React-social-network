import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reduser';
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"; // переименован, при импорте по дефолту, из thunk в thunkMiddleware.


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;