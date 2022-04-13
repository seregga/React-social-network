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
        <div className={s.profiile__info}>
            <div className={s.profiile__photo}>
                <img src={!props.profile.photos.small ? userPhoto : props.profile.photos.small} alt="" />
                {/* <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt="" /> */}
            </div>
            <div className={s.profiile__name}> {props.profile.fullName}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    )

}
export default ProfileInfo;