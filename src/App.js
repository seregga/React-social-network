import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import ProfileParams from './components/Profile/ProfileParams';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <NavBarContainer />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<ProfileParams />} />

                    <Route path='/profile/:userId' element={<ProfileParams />} />

                    <Route path='/dialogs' element={<DialogsContainer />} />

                    <Route path='/users' element={<UsersContainer />} />

                    <Route path='/login' element={<Login />} />

                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route exact path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;