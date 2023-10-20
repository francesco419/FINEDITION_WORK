import ProfileJourney from '../../../components/profile/profileJourney';
import ProfileClass from './class';
import ProfileKeyword from './keywordList';
import profileSample from '../../../assets/profile/image/profileSample.jpg';
import errorImg from '../../../assets/image/imageError.jpg';
import { useAppSelector } from '../../../redux/hooks';
import { selectUserInfo } from '../../../redux/slices/userInfoSlice';
import { ReactComponent as Set } from '../../../assets/profile/image/svg/personalSetsvg.svg';
import { useState } from 'react';
import BorderInput from '../../../components/common/input/borderInput';
import noProfile from '../../../assets/profile/image/noProfile.jpg';
import BorderSelect from '../../../components/common/select/borderSelect';
import { COUNTRY_NAMES } from '../../../temp/countries';
import PersonalSetting from './personalSetting';

export default function ProfilePersonal() {
  const user = useAppSelector(selectUserInfo);
  const [setting, setSetting] = useState<boolean>(false);

  const errorImageHandler = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = errorImg;
  };

  const settingHandler = () => {
    setSetting((setting) => !setting);
  };

  return (
    <div className='profile_personal'>
      <div className='profile_personal-profile'>
        <div className='profile_personal-photo'>
          <img
            src={user.userImage !== null ? user.userImage : errorImg}
            onError={errorImageHandler}
          />
          <button onClick={settingHandler}>
            <Set />
          </button>
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
      {setting && <PersonalSetting cb={settingHandler} />}
    </div>
  );
}
