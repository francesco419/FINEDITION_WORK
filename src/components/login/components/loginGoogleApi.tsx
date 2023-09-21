import { LoginForm_type } from '../login';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import google from '../assets/google.png';
import { ReactComponent as Logo } from '../assets/finedition.svg';
import { useAppDispatch } from '../../../redux/hooks';
import {
  UserInfoState,
  setUserInfo
} from '../../../redux/slices/userInfoSlice';

export default function LoginFormGoogleAPI({ toNext }: LoginForm_type) {
  const url =
    'https://people.googleapis.com/v1/people/me?personFields=emailAddresses,names,locales,photos';
  const dispatch = useAppDispatch();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getPeopleID(tokenResponse.access_token);
    }
  });

  const getPeopleID = async (access_token: string) => {
    await axios
      .get(url, { headers: { Authorization: 'Bearer ' + access_token } })
      .then((response) => {
        const userInfo = {
          value: {
            id: response.data.resourceName,
            username: response.data.names[0].displayName,
            email: response.data.emailAddresses[0].value,
            nationality: undefined,
            photo: response.data.photos[0].url,
            age: undefined,
            gender: undefined,
            keyword: undefined
          }
        };
        dispatch(setUserInfo(userInfo));
        toNext(1);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='login-google'>
      <h2>Welcome on board</h2>
      <div className='login-google_snsLogin'>
        <button
          type='button'
          className='login-google_self'
          onClick={() => login()}
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
