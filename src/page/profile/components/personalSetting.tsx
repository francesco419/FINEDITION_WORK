import BorderInput from '../../../components/common/input/borderInput';
import BorderSelect from '../../../components/common/select/borderSelect';
import { COUNTRY_NAMES } from '../../../temp/countries';
import noProfile from '../../../assets/profile/image/noProfile.jpg';
import './personalSetting.scss';
import { ReactComponent as Exit } from '../../../assets/svg/exit.svg';
import { useState, useRef, useEffect } from 'react';
import _ from 'lodash';
import { getInterceptor, sendAxiosState } from '../../../func/interceptor';
import { AxiosResponse } from 'axios';
import { postInterceptor } from '../../../func/interceptor';
import ConfirmButton from '../../../components/common/buttons/confirmButton';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import {
  selectUserInfo,
  setUpdateInfo
} from '../../../redux/slices/userInfoSlice';
import { sendFilesPost } from '../../../func/formdata';

type PersonalSetting_Type = {
  cb: () => void;
};

export default function PersonalSetting({ cb }: PersonalSetting_Type) {
  const imgRef = useRef<HTMLInputElement>(null);
  const user = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File>();
  const [img, setImg] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nation, setNation] = useState<string>('');
  const [birth, setBirth] = useState<number>(0);
  const [gender, setGender] = useState<string>('');

  const changeProfile = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/updateuser`,
      data: {
        username: name !== '' ? name : user.username,
        usernation: nation !== '' ? nation : user.usernation,
        usergender: gender !== '' ? gender : user.usergender,
        userbirth: birth !== 0 ? birth : user.userbirth,
        userid: user.userid
      },
      callback: (e: AxiosResponse) => {
        console.log(e);
      }
    };
    postInterceptor(data);
  };

  const postHandler = () => {
    console.log('postHandler');
    let data = {
      username: name !== '' ? name : user.username,
      usernation: nation !== '' ? nation : user.usernation,
      usergender: gender !== '' ? gender : user.usergender,
      userbirth: birth !== 0 ? birth : user.userbirth,
      userid: user.userid
    };
    sendFilesPost(data, file, 'put', updateUserInfo);
  };

  const updateUserInfo = (id: number) => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/getinfo`,
      data: { userid: id },
      callback: (e: AxiosResponse) => {
        if (e.data.result && e.data.result.length > 0) {
          console.log(e.data.result[0]);
          dispatch(setUpdateInfo(e.data.result[0]));
          cb();
        } else {
          console.log(e);
        }
      }
    };
    getInterceptor(data);
  };

  /*   data: any,
  files: File[],
  axios: string, */

  const changeImg = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/updateuser`,
      data: {
        userimage: file
      },
      callback: (e: AxiosResponse) => {
        console.log(e);
      }
    };
    postInterceptor(data);
  };

  const onClickHandler = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  /**------------------name----------------------- */

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setName((name) => e.target.value);
    }
  };

  const nameHandlerDebounce = _.debounce(nameHandler, 300);

  /**------------------nation----------------------- */
  const nationHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setNation((nation) => e.target.value);
    }
  };

  /**------------------birth----------------------- */
  const birthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const inputBirth = parseInt(e.target.value);
      if (inputBirth < 99999999) setBirth((birth) => parseInt(e.target.value));
    }
  };

  const birthHandlerDebounce = _.debounce(birthHandler, 300);

  /**------------------gender----------------------- */
  const genderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setGender((gender) => e.target.value);
    }
  };

  /**------------------file----------------------- */

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files[0];
      setFile((file) => files);

      if (!files.type.match('image/.*')) {
        alert('Only image file can be upload.');
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onloadend = () => {
        setImg((img) => reader.result as string);
      };
    }
  };

  const onErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = noProfile;
  };

  return (
    <div className='settingProfile'>
      <button className='settingProfile-exit' onClick={cb}>
        <Exit />
      </button>
      <h2>Your Profile</h2>
      <div className='settingProfile_container'>
        <button className='settingProfile-imgbox' onClick={onClickHandler}>
          <img src={img} onError={(e) => onErrorHandler(e)} />
        </button>
        <input
          hidden
          ref={imgRef}
          name='file'
          type='file'
          onChange={(e) => onChangeHandler(e)}
        />
        <div className='settingProfile_inputbox'>
          <BorderInput
            type='text'
            cb={nameHandlerDebounce}
            label='Name'
            width={300}
            placeholder={`Name`}
          />
          <BorderSelect
            cb={nationHandler}
            label='Nationality'
            width={300}
            firstOption={'Nationality'}
            option={COUNTRY_NAMES}
          />
          <BorderInput
            type='number'
            cb={birthHandlerDebounce}
            label='Birth'
            width={150}
            placeholder={`DD/MM/YYYY`}
          />
          <BorderSelect
            firstOption='Gender'
            cb={genderHandler}
            label='Gender'
            width={135}
            option={['Male', 'Female']}
          />
          <ConfirmButton children={'Confirm'} cb={postHandler} />
        </div>
      </div>
    </div>
  );
}
