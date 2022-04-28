import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import ProfileParams from './components/Profile/ProfileParams';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth-reducer';
import Preloader from './components/common/Preloader/Preloader';

// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
// const ProfileParams = React.lazy(() => import('./components/Profile/ProfileParams'))

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        if (this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <NavBarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='*' element={<ProfileContainer />} />

                        <Route path='/profile/:userId' element={<ProfileParams />} />

                        {/* <Route path='/profile/:userId' render={() => {
                            return <React.Suspense fallback={<Preloader />}><DialogsContainer /></React.Suspense>
                        }} /> */}

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
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { getAuthUserData })(App);

