import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavBarContainer />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/profile' element={<Profile />} />

                    <Route exact path='/dialogs' element={<DialogsContainer />} />

                    <Route exact path='/users' element={<UsersContainer />} />

                    <Route exact path='/news' element={<News />} />
                    <Route exact path='/music' element={<Music />} />
                    <Route exact path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;