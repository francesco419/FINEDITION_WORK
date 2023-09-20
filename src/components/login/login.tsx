import './login.scss';
import { ReactComponent as Google } from '../../assets/svg/google-login.svg';
import { ReactComponent as Window } from '../../assets/svg/window.svg';
import { ReactComponent as Apple } from '../../assets/svg/apple.svg';
import { ReactComponent as Exit } from '../../assets/svg/exit.svg';
import { useAppDispatch } from '../../redux/hooks';
import { setLoginFormFalse } from '../../redux/slices/loginSlice';
import google from './assets/google.png';
import { ReactComponent as Logo } from './assets/finedition.svg';
import { useEffect, useState } from 'react';
import { COUNTRY_NAMES, TASTE } from '../../temp/countries';
import _ from 'lodash';
import congrates_img from './assets/congrates.png';

type LoginForm_type = {
  toNext: (setNumber: number) => void;
};

export default function Login() {
  const [changeForm, setChangeForm] = useState<number>(0);
  const dispatch = useAppDispatch();
  const changeLoginForm = () => {
    dispatch(setLoginFormFalse());
  };

  const changeFormHandler = (setNumber: number) => {
    setChangeForm((changeForm) => setNumber);
  };

  /*  useEffect(()=>{
    setChangeForm(changeForm=>0);
  },[]) */

  return (
    <div className='login'>
      <div className='login_container'>
        {changeForm === 0 && <SignIn toNext={changeFormHandler} />}
        {changeForm === 1 && <Curate toNext={changeFormHandler} />}
        {changeForm === 2 && <PersonalTaste toNext={changeFormHandler} />}
        {changeForm === 3 && <Congrates />}
        <button className='login_exit' onClick={changeLoginForm}>
          <Exit />
        </button>
      </div>
    </div>
  );
}

function SignIn({ toNext }: LoginForm_type) {
  return (
    <div className='login_form'>
      <h2>Welcome on board</h2>
      <div className='login_snsLogin'>
        <button
          type='button'
          className='login_snsLogin-self'
          onClick={() => toNext(1)}
        >
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

function Curate({ toNext }: LoginForm_type) {
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
          <input type='text' placeholder='your name...' />
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
            <input type='number' placeholder='your age...' />
          </div>
          <div className='login_curate-inputbox small-input'>
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

function PersonalTaste({ toNext }: LoginForm_type) {
  return (
    <div className='login_taste'>
      <div className='login-paragraph'>
        <p>Click & get finest options</p>
        <p style={{ float: 'left' }}>that fits your taste</p>
      </div>
      <div className='login_taste-form'>
        {_.map(TASTE, (o, index) => {
          return (
            <div className='popo'>
              <div>{o}</div>
            </div>
          );
        })}
      </div>
      <div className='optional'>
        <p>(optional)</p>
      </div>
      <button type='button' onClick={() => toNext(3)}>
        Continue
      </button>
    </div>
  );
}

function Congrates() {
  const dispatch = useAppDispatch();
  const changeLoginForm = () => {
    dispatch(setLoginFormFalse());
  };
  return (
    <div className='login_congrates'>
      <div className='login-paragraph'>
        <p style={{ color: '#161616' }}>Congratulation!</p>
      </div>
      <img src={congrates_img} />
      <div className='login_congrates-discoverer'>
        <h4>You are</h4>
        <h3>Discoverer</h3>
        <p>
          Has a strong sense of curiosity that drives you to explore the unknown
          and seek out new experiences.
        </p>
      </div>
      <div className='optional2'>
        <p>Already has a journey plan?</p>
      </div>
      <button type='button' onClick={changeLoginForm}>
        Discover
      </button>
    </div>
  );
}

/* 
      <div className='datalist'>
        <datalist id='nationality' role='listbox'>
          {COUNTRY_NAMES.map((item, index) => (
            <option value={item} key={`data_${index}`} />
          ))}
        </datalist>
      </div>


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
