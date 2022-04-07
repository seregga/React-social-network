import React from 'react';
// import s from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onClick={this.activateEditMode.bind(this)}>{this.props.profile.aboutMe}</span>
                    </div>
                    : <div>
                        <input onBlur={this.deActivateEditMode.bind(this)} autoFocus={true} value={this.props.profile.aboutMe} />
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus