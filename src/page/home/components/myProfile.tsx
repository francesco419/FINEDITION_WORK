import './myProfile.scss';
import ProfileJourney from '../../../components/profile/profileJourney';
import notLogged from '../../../assets/image/home/home-profile-not-logged-in.png';

export default function MyProfile() {
  return (
    <div className='myProfile'>
      <div className='myProfile_head'>
        <img
          src='https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDhI_K-bupgn_2tA8fE4tcHELHI7HLQqwJlMeFxR9Xcc7fTb_Ik3seukv-Ktz5zSW7XJvqhpCcpu-uhWRzzfQ=w1494-h913'
          onError={notLogged}
        />
      </div>
      <div className='myProfile_container'>
        <ProfileJourney type={false} />
      </div>
    </div>
  );
}
