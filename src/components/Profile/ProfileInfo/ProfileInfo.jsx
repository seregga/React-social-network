import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import userPhoto from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profiile__info}>
            <div className={s.profiile__photo}>
                <img src={!profile.photos.large ? userPhoto : profile.photos.large} alt="" />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            </div>
            <div className={s.profiile__name}> {profile.fullName}</div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    )

}
export default ProfileInfo;