import './header.scss';
import { ReactComponent as LogoLetter } from '../../assets/svg/logo_letter.svg';
import HeaderLocate from './locate';
import HeaderMenu from './menu';
import Login from '../login/login';
import { useAppSelector } from '../../redux/hooks';
import { selectLogin } from '../../redux/slices/loginSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

type HeaderType = {
  type: string;
};

export default function Header({ type }: HeaderType) {
  const login = useAppSelector(selectLogin);
  const nav = useNavigate();
  const [backColor, setBackColor] = useState<string>('');
  const [fontColor, setFontColor] = useState<string>('');
  useEffect(() => {
    chooseColor(type);
  }, []);

  const navtoHome = () => {
    nav('/');
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
        changeColor('#eaeaea');
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
      {login.value.login && <Login />}
    </div>
  );
}
