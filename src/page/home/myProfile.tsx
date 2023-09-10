import './myProfile.scss';
import profileImg from '../../assets/image/profile.png';
import { ReactComponent as ArrowDown } from '../../assets/svg/Arrow down.svg';
import ProfileJourney from '../../components/profile/profileJourney';

export default function MyProfile() {
  return (
    <div className='myProfile'>
      <div className='myProfile_head'>
        <h3>My Edition</h3>
        <ArrowDown />
      </div>
      <div className='myProfile_container'>
        <div className='myProfile_imgbox'>
          <div className='myProfile_imgbox-tag'>
            <p>collector</p>
          </div>
          <img src={profileImg} />
          <p>Sophie</p>
        </div>
        <ProfileJourney type={false} />
      </div>
    </div>
  );
}
