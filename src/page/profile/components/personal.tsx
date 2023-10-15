import ProfileJourney from '../../../components/profile/profileJourney';
import ProfileClass from './class';
import ProfileKeyword from './keywordList';
import profileSample from '../../../assets/profile/image/profileSample.jpg';

export default function ProfilePersonal() {
  return (
    <div className='profile_personal'>
      <div className='profile_personal-profile'>
        <div className='profile_personal-photo'>
          <img src={profileSample} />
        </div>
        <div className='profile_personal-class'>
          <ProfileClass
            userClass={{
              userClass: 'Green',
              userClassMilege: 1000,
              userClassPoint: 0,
              userClassCoupon: 0
            }}
          />
        </div>
      </div>
      <ProfileJourney type={true} />
      <ProfileKeyword />
    </div>
  );
}
