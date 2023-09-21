import { LoginForm_type } from '../login';
import { useState } from 'react';
import { COUNTRY_NAMES } from '../../../temp/countries';

export default function LoginFormCurate({ toNext }: LoginForm_type) {
  const [searchresult, setSearchResult] = useState('');
  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchResult(e.target.value);

  return (
    <div className='login-curate'>
      <div className='login-curate_paragraph'>
        <p>Tell us, so we can curate</p>
        <p>just for you</p>
      </div>
      <div className='login-curate_form'>
        <div className='login-curate_inputbox'>
          <label>Name</label>
          <input type='text' placeholder='your name...' />
        </div>
        <div className='login-curate_inputbox'>
          <label htmlFor='Nationality'>Nationality</label>
          <select name='Nationality' id='Nationality' value='Nationality'>
            {COUNTRY_NAMES.map((item, index) => (
              <option value={item} key={`data_${index}`}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex' }}>
          <div className='login-curate_inputbox small-input margin14'>
            <label>Age</label>
            <input type='number' placeholder='your age...' />
          </div>
          <div className='login-curate_inputbox small-input'>
            <label htmlFor='gender'>Gender</label>
            <select name='gender' id='gender'>
              <option value='Gender'>Gender</option>
              <option value='Gender'>------------------</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>
        </div>
      </div>
      <button type='button' onClick={() => toNext(2)}>
        Continue
      </button>
    </div>
  );
}
