import './myProfile.scss';
import profileImg from '../../assets/image/profile.png';
import { ReactComponent as ArrowDown } from '../../../assets/svg/Arrow down.svg';
import ProfileJourney from '../../../components/profile/profileJourney';
import notLogged from '../../../assets/image/home/home-profile-not-logged-in.png';

export default function MyProfile() {
  return (
    <div className='myProfile'>
      <div className='myProfile_head'>
        <img src={notLogged} />
      </div>
      <div className='myProfile_container'>
        <ProfileJourney type={false} />
      </div>
    </div>
  );
}
