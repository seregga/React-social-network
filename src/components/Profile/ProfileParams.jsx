import { useParams } from 'react-router-dom';
import ProfileContainer from './ProfileContainer';
import { React } from 'react';

const ProfileParams = (props) => {
    const { userId } = useParams();
    return (
        <ProfileContainer userId={userId} />
    )
}
export default ProfileParams
