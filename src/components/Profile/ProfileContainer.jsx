import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, updateStatus, getStatus, savePhoto } from './../../redux/profile-reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.userId;
        if (!userId) {
            userId = this.props.authUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        if (this.props.userId !== prevProps.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                isOwner={!this.props.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
    withAuthRedirect //hoc
)(ProfileContainer)
