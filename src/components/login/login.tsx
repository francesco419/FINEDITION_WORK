import './login.scss';
import { ReactComponent as Google } from '../../assets/svg/google-login.svg';
import { ReactComponent as Exit } from '../../assets/svg/exit.svg';

export default function Login() {
  return (
    <div className='login'>
      <div className='login_container'>
        <form className='login_form'>
          <h2>Log in</h2>
          <div className='login_snsLogin'>
            <Google />
            <Google />
            <Google />
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
        <button className='login_exit'>
          <Exit />
        </button>
      </div>
    </div>
  );
}
