import { LoginForm_type } from '../login';
import { useGoogleLogin } from '@react-oauth/google';
import axios, { AxiosResponse } from 'axios';
import google from '../assets/google.png';
import { ReactComponent as Logo } from '../assets/finedition.svg';
import { useAppDispatch } from '../../../redux/hooks';
import { setLoginFormFalse } from '../../../redux/slices/loginSlice';
import {
  UserInfoState,
  setUserInfo
} from '../../../redux/slices/userInfoSlice';
import { postInterceptor, sendAxiosState } from '../../../func/interceptor';
import { getTravel } from '../../../func/func';
import { getTravelInfo } from '../../../redux/slices/travelSlice';

export default function LoginFormGoogleAPI({
  toNext,
  setUserInfoTemp
}: LoginForm_type) {
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
        const userInfo: UserInfoState = {
          userid: 78,
          username: response.data.names[0].displayName,
          useremail: response.data.emailAddresses[0].value,
          usernation: null,
          userImage: response.data.photos[0].url,
          userbirth: null,
          usergender: null,
          userkeyword: null
        };
        loginCheckHandler(userInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const loginCheckHandler = (userInfo: UserInfoState) => {
    const loginCheckData: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/logincheck`,
      data: { email: userInfo.useremail },
      config: undefined,
      callback: (e: AxiosResponse) => {
        if (e.data.result[0]) {
          loginSuccess(e.data.result[0]);
        } else {
          loginFailed(userInfo);
        }
      }
    };
    postInterceptor(loginCheckData);
  };

  const loginFailed = (userInfo: UserInfoState) => {
    setUserInfoTemp(userInfo);
    toNext(1);
  };

  const loginSuccess = (userInfo: UserInfoState) => {
    if (userInfo.userid) getTravel(userInfo.userid, getTravelCallback);
    dispatch(setUserInfo(userInfo));
    dispatch(setLoginFormFalse());
  };

  const getTravelCallback = (e: AxiosResponse) => {
    if (e.data.flag !== false) {
      if (e.data.result.length > 0) dispatch(getTravelInfo(e.data.result[0]));
    }
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
