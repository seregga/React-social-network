import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.userId;
        if (!userId) { userId = 2 }
        this.props.getUserProfile(userId)
        // usersAPI.getProfile(userId)
        //     // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     .then(r => {
        //         this.props.setUserProfile(r.data)
        //     })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer) // hoc


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect
)(ProfileContainer)

// export default connect(mapStateToProps, { getUserProfile })(AuthRedirectComponent)