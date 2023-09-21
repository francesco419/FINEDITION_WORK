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
import { selectUserInfo } from '../../redux/slices/userInfoSlice';

export interface LoginForm_type {
  toNext: (setNumber: number) => void;
}

export default function Login() {
  const [changeForm, setChangeForm] = useState<number>(0);
  const dispatch = useAppDispatch();

  const changeLoginForm = () => {
    dispatch(setLoginFormFalse());
  };

  const changeFormHandler = (setNumber: number) => {
    setChangeForm((changeForm) => setNumber);
  };

  return (
    <div className='login'>
      <div className='login_container'>
        {changeForm === 0 && <LoginFormGoogleAPI toNext={changeFormHandler} />}
        {changeForm === 1 && <LoginFormCurate toNext={changeFormHandler} />}
        {changeForm === 2 && (
          <LoginFormPersonalTaste toNext={changeFormHandler} />
        )}
        {changeForm === 3 && <LoginFormSuccess />}
        <button className='login_exit' onClick={changeLoginForm}>
          <Exit />
        </button>
      </div>
    </div>
  );
}
