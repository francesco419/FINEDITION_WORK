import ProfileJourney from '../../../components/profile/profileJourney';
import ProfileClass from './class';
import ProfileKeyword from './keywordList';
import profileSample from '../../../assets/profile/image/profileSample.jpg';
import errorImg from '../../../assets/image/imageError.jpg';
import { useAppSelector } from '../../../redux/hooks';
import { selectUserInfo } from '../../../redux/slices/userInfoSlice';

export default function ProfilePersonal() {
  const user = useAppSelector(selectUserInfo);

  const errorImageHandler = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = errorImg;
  };
  return (
    <div className='profile_personal'>
      <div className='profile_personal-profile'>
        <div className='profile_personal-photo'>
          <img
            src={user.userImage !== null ? user.userImage : errorImg}
            onError={errorImageHandler}
          />
        </div>
        <div className='profile_personal-class'>
          <ProfileClass
            userClass={{
              userClass: 'Green',
              userClassMilege: '-',
              userClassPoint: '-',
              userClassCoupon: '-'
            }}
          />
        </div>
      </div>
      <ProfileJourney type={true} />
      <ProfileKeyword />
    </div>
  );
}
