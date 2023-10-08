import './header.scss';
import { ReactComponent as LogoLetter } from '../../assets/svg/logo_letter.svg';
import HeaderLocate from './locate';
import HeaderMenu from './menu';
import Login from '../login/login';
import { useAppSelector } from '../../redux/hooks';
import { selectLogin } from '../../redux/slices/loginSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import SearchDropDown from './search/search';
import {
  APIInterceptor,
  postInterceptor,
  sendAxiosState
} from '../../func/interceptor';
import { API_ENG } from '../../temp/apicode';
import { AxiosResponse } from 'axios';
import { API_TYPE } from '../../func/interface';

type HeaderType = {
  type: string;
};

export default function Header({ type }: HeaderType) {
  const login = useAppSelector(selectLogin);
  const nav = useNavigate();
  const [backColor, setBackColor] = useState<string>('');
  const [fontColor, setFontColor] = useState<string>('');
  const [anyuting, setAnyuting] = useState<any[]>([]);

  useEffect(() => {
    chooseColor(type);
    //getdata(0);
  }, []);

  const navtoHome = () => {
    nav('/');
  };

  const getdata = (number: number) => {
    const data: API_TYPE = {
      url: `https://apis.data.go.kr/B551011/EngService1/detailCommon1?serviceKey=${process.env.REACT_APP_TOUR_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${API_ENG[number].contentid}&defaultYN=Y&firstImageYN=N&areacodeYN=N&catcodeYN=N&addrinfoYN=Y&mapinfoYN=N&overviewYN=N`,
      callback: (o: any) => {
        setAnyuting((anyuting) => [
          ...anyuting,
          o.data.response.body.items.item[0]
        ]);
        if (number !== 82) {
          console.log(number);
          getdata(number + 1);
        } else {
          console.log('end');
          console.log(anyuting);
        }
      }
    };
    APIInterceptor(data);
  };

  const chooseColor = (type: string) => {
    switch (type) {
      case 'black':
        changeColor('#000');
        return;
      case 'yellow':
        changeColor('#b9e155');
        return;
      case 'gray':
        changeColor('#f3f3f8');
        return;
      default:
        changeColor('#ff0000');
        return;
    }
  };

  const changeColor = (color: string) => {
    if (color === '#000') {
      setFontColor((fontColor) => '#fff');
    } else {
      setFontColor((fontColor) => '#000');
    }
    setBackColor((backColor) => color);
  };

  return (
    <div className='header'>
      <div
        className='header_container'
        style={{
          backgroundColor: backColor,
          color: fontColor
        }}
      >
        <button onClick={navtoHome}>
          <LogoLetter style={{ fill: fontColor }} />
        </button>
        <HeaderLocate color={fontColor} />
        <HeaderMenu />
      </div>
      {/* <button
        style={{ color: 'white' }}
        onClick={() => {
          console.log(anyuting);
        }}
      >
        aaaa
      </button> */}
      {login.value.login && <Login />}
    </div>
  );
}
