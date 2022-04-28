import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div >
            {!editMode
                ? <div >
                    <span className={s.profile__status} onClick={activateEditMode}>
                        {status || 'No status'}</span>
                </div>
                : <div >
                    <input className={s.profile__status} onBlur={deActivateEditMode}
                        autoFocus={true} onChange={onStatusChange} value={status}
                    />
                </div>
            }

        </div>
    )
}

export default ProfileStatusWithHooks


