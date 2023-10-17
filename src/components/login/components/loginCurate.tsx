import { LoginForm_type } from '../login';
import { useState, useCallback } from 'react';
import { COUNTRY_NAMES } from '../../../temp/countries';
import _ from 'lodash';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserInfo } from '../../../redux/slices/userInfoSlice';

export default function LoginFormCurate({ toNext }: LoginForm_type) {
  const genders = ['Male', 'Female'];
  let name: string = '',
    nation: string = '',
    age: string = '',
    gender: string = '';
  const dispatch = useAppDispatch();

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      console.log(e.target.value);
      //setName(e.target.value);
    }
  };

  const nationChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    nation = e.target.value;
  };

  const nameDebounce = useCallback(_.debounce(nameChangeHandler, 700), []);

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
            {_.shuffle(COUNTRY_NAMES).map((item, index) => (
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
          console.log(nation, name, age, gender);
          dispatch(
            setUserInfo({
              userid: null,
              username: name,
              useremail: null,
              usernation: nation,
              userImage: null,
              userbirth: age,
              usergender: gender,
              userkeyword: null
            })
          );
          toNext(2);
        }}
      >
        Continue
      </button>
    </div>
  );
}
