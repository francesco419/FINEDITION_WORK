import './login.scss';
import { ReactComponent as Google } from '../../assets/svg/google-login.svg';
import { ReactComponent as Window } from '../../assets/svg/window.svg';
import { ReactComponent as Apple } from '../../assets/svg/apple.svg';
import { ReactComponent as Exit } from '../../assets/svg/exit.svg';
import { useAppDispatch } from '../../redux/hooks';
import { setLoginFormFalse } from '../../redux/slices/loginSlice';

export default function Login() {
  const dispatch = useAppDispatch();
  const changeLoginForm = () => {
    dispatch(setLoginFormFalse());
  };
  return (
    <div className='login'>
      <div className='login_container'>
        <form className='login_form'>
          <h2>Log in</h2>
          <div className='login_snsLogin'>
            <Google />
            <Window />
            <Apple />
          </div>
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
        </form>
        <button className='login_exit' onClick={changeLoginForm}>
          <Exit />
        </button>
      </div>
    </div>
  );
}
