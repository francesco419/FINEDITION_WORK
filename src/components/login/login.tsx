import './login.scss';
import { ReactComponent as Google } from '../../assets/svg/google-login.svg';
import { ReactComponent as Window } from '../../assets/svg/window.svg';
import { ReactComponent as Apple } from '../../assets/svg/apple.svg';
import { ReactComponent as Exit } from '../../assets/svg/exit.svg';
import { useAppDispatch } from '../../redux/hooks';
import { setLoginFormFalse } from '../../redux/slices/loginSlice';
import google from './assets/google.png';
import { ReactComponent as Logo } from './assets/finedition.svg';
import { useState } from 'react';
import { COUNTRY_NAMES } from '../../temp/countries';

export default function Login() {
  const dispatch = useAppDispatch();
  const changeLoginForm = () => {
    dispatch(setLoginFormFalse());
  };
  return (
    <div className='login'>
      <div className='login_container'>
        <Curate />
        <button className='login_exit' onClick={changeLoginForm}>
          <Exit />
        </button>
      </div>
    </div>
  );
}

function SignIn() {
  return (
    <div className='login_form'>
      <h2>Welcome on board</h2>
      <div className='login_snsLogin'>
        <button type='button' className='login_snsLogin-self'>
          <img src={google} />
          <p>Continue with Google</p>
        </button>
      </div>
      <div className='login_paragraph'>
        <p>Deep dive for your unforgettable journey</p>
      </div>
      <div className='login_paragraph'>
        <Logo />
      </div>
    </div>
  );
}

function Curate() {
  const [searchresult, setSearchResult] = useState('');
  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchResult(e.target.value);

  return (
    <div className='login_curate'>
      <div className='login_curate-paragraph'>
        <p>Tell us, so we can curate</p>
        <p>just for you</p>
      </div>
      <div className='login_curate-form'>
        <div className='login_curate-inputbox'>
          <label>Name</label>
          <input type='text' />
        </div>
        <div className='login_curate-inputbox'>
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
          <div className='login_curate-inputbox small-input margin14'>
            <label>Age</label>
            <input type='number' />
          </div>
          <div className='login_curate-inputbox small-input'>
            <label htmlFor='gender'>Gender</label>
            <select name='gender' id='gender'>
              <option value='A'>A</option>
              <option value='B'>B</option>
              <option value='C'>C</option>
              <option value='D'>D</option>
            </select>
          </div>
        </div>
      </div>
      <div></div>
      <div className='datalist'>
        <datalist id='nationality' role='listbox'>
          {COUNTRY_NAMES.map((item, index) => (
            <option value={item} key={`data_${index}`} />
          ))}
        </datalist>
      </div>
    </div>
  );
}
/* 
function HeaderSearch() {
  const [searchresult, setSearchResult] = useState('');
  const searchChange = ({ target: { value } }) => setSearchResult(value);

  //let navi = useNavigate();

  const searchSubmit = (data, e) => {
    if (AllCountry.indexOf(data) !== -1) {
      navi(`/Country/${data}`);
    } else {
      alert(`${data}는 존재하지 않습니다!`);
      return;
    }
  };

  return (
    <div className={styles.search_box}>
      <input
        className={styles.search_input}
        size='10'
        placeholder='Search...'
        type='text'
        list='searchOption'
        value={searchresult}
        onChange={searchChange}
      />
      <button
        type='submit'
        className={styles.search_button}
        onClick={() => searchSubmit(searchresult)}
      >
        <Search />
      </button>
    </div>
  );
} */

{
  /* <form className='login_form'>
          <fieldset>
            <legend>OR</legend>
          </fieldset>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='button' value='continue'></input>
          <div className='login_form-account'>
            <p>No account?</p>
            <button type='button' className='login_form-sign'>
              Sign up
            </button>
          </div>
          <button type='button' className='login_form-reset'>
            Reset Password
          </button>
        </form> */
}
