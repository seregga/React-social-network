import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reduser';
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"; // переименован, при импорте по дефолту, из thunk в thunkMiddleware.
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer ";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;