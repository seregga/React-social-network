import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import userPhoto from './../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.profiile_photo}>
                <img src={!props.profile.photos.small ? userPhoto : props.profile.photos.small} alt="" />
                {/* <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt="" /> */}
            </div>
            <div> {props.profile.fullName}</div>
            <ProfileStatus {...props} />
        </div>
    )

}
export default ProfileInfo;