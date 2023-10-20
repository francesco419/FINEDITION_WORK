import { LoginForm_type } from '../login';
import { useState, useCallback } from 'react';
import { COUNTRY_NAMES } from '../../../temp/countries';
import _ from 'lodash';
import { useAppDispatch } from '../../../redux/hooks';
import {
  UserInfoState,
  setUserInfo
} from '../../../redux/slices/userInfoSlice';

export default function LoginFormCurate({
  toNext,
  setUserInfoTemp,
  userInfoBefore
}: LoginForm_type) {
  const genders = ['Male', 'Female'];
  let name: string = '',
    nation: string = '',
    age: string = '',
    gender: string = '';
  const dispatch = useAppDispatch();

  const nationChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    nation = e.target.value;
  };

  const curateVerificationHandler = (obj: UserInfoState) => {
    setUserInfoTemp(obj, userInfoBefore);
    toNext(2);
  };

  return (
    <div className='login-curate'>
      <div className='login-curate_paragraph'>
        <p>Tell us, so we can curate</p>
        <p>just for you</p>
      </div>
      <div className='login-curate_form'>
        <div className='login-curate_inputbox'>
          <label>Name</label>
          <input
            type='text'
            autoFocus
            onChange={(e) => {
              name = e.target.value;
            }}
          />
        </div>
        <div className='login-curate_inputbox'>
          <label htmlFor='Nationality'>Nationality</label>
          <select
            name='Nationality'
            id='Nationality'
            onChange={(e) => nationChangeHandler(e)}
          >
            <option value='' disabled selected></option>
            {_.map(COUNTRY_NAMES, (item, index) => (
              <option value={item} key={`data_${index}`}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex' }}>
          <div className='login-curate_inputbox small-input margin14'>
            <label>Birth</label>
            <input
              type='number'
              placeholder='DD/MM/YYYY'
              onChange={(e) => {
                age = e.target.value;
              }}
            />
          </div>
          <div className='login-curate_inputbox small-input'>
            <label htmlFor='gender'>Gender</label>
            <select
              name='gender'
              id='gender'
              placeholder='kr'
              onChange={(e) => {
                gender = e.target.value;
              }}
            >
              <option value='' disabled selected></option>
              {_.shuffle(genders).map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
      <button
        type='button'
        onClick={() => {
          curateVerificationHandler({
            userid: null,
            username: name,
            useremail: null,
            usernation: nation,
            userImage: null,
            userbirth: age,
            usergender: gender,
            userkeyword: null
          });
        }}
      >
        Continue
      </button>
    </div>
  );
}
