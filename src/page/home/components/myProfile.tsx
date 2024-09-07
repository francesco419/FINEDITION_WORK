import './myProfile.scss';
import ProfileJourney from '../../../components/profile/profileJourney';
import notLogged from '../../../assets/image/home/home-profile-not-logged-in.png';
import noLog from '../../../assets/image/finedition_main_no log-in_low 1.png';

export default function MyProfile() {
  return (
    <div className='myProfile'>
      <div className='myProfile_head'>
        <img src={noLog} onError={notLogged} />
      </div>
      <div className='myProfile_container'>
        <ProfileJourney type={false} />
      </div>
    </div>
  );
}
