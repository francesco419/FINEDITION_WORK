import './login.scss';
import { ReactComponent as Exit } from '../../assets/svg/exit.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLoginFormFalse } from '../../redux/slices/loginSlice';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import LoginFormGoogleAPI from './components/loginGoogleApi';
import LoginFormCurate from './components/loginCurate';
import LoginFormPersonalTaste from './components/loginPersonalTaste';
import LoginFormSuccess from './components/loginSuccess';
import {
  UserInfoState,
  selectUserInfo
} from '../../redux/slices/userInfoSlice';

export interface LoginForm_type {
  toNext: (setNumber: number) => void;
  setUserInfoTemp: (obj: UserInfoState, before?: UserInfoState) => void;
  userInfoBefore?: UserInfoState;
}

export default function Login() {
  const [changeForm, setChangeForm] = useState<number>(0);
  const [beforeUserInfo, setBeforeUserInfo] = useState<UserInfoState>();
  const dispatch = useAppDispatch();

  const changeLoginForm = () => {
    dispatch(setLoginFormFalse());
  };

  const changeFormHandler = (setNumber: number) => {
    setChangeForm((changeForm) => setNumber);
  };

  const beforeUserInfoDeliver = (
    obj: UserInfoState,
    before?: UserInfoState
  ) => {
    let temp: UserInfoState;

    if (before) {
      temp = before;
    } else {
      temp = {
        userid: null,
        username: null,
        useremail: null,
        usernation: null,
        userImage: null,
        userbirth: null,
        usergender: null,
        userkeyword: null
      };
    }

    _.forEach(temp, (value, key) => {
      const isValueExist = obj[key];
      if (isValueExist !== null) {
        temp[key] = isValueExist;
      }
    });
    setBeforeUserInfo((beforeUserInfo) => temp);
  };

  return (
    <div className='login'>
      <div className='login_container'>
        {changeForm === 0 && (
          <LoginFormGoogleAPI
            toNext={changeFormHandler}
            setUserInfoTemp={beforeUserInfoDeliver}
          />
        )}
        {changeForm === 1 && (
          <LoginFormCurate
            toNext={changeFormHandler}
            setUserInfoTemp={beforeUserInfoDeliver}
            userInfoBefore={beforeUserInfo}
          />
        )}
        {changeForm === 2 && (
          <LoginFormPersonalTaste
            toNext={changeFormHandler}
            setUserInfoTemp={beforeUserInfoDeliver}
            userInfoBefore={beforeUserInfo}
          />
        )}
        {changeForm === 3 && <LoginFormSuccess />}
        <button className='login_exit' onClick={changeLoginForm}>
          <Exit />
        </button>
      </div>
    </div>
  );
}
