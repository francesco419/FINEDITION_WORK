import './header.scss';
import { ReactComponent as LogoLetter } from '../../assets/svg/logo_letter.svg';
import HeaderLocate from './locate';
import HeaderMenu from './menu';
import Login from '../login/login';
import { useAppSelector } from '../../redux/hooks';
import { selectLogin } from '../../redux/slices/loginSlice';

export default function Header() {
  const login = useAppSelector(selectLogin);
  return (
    <div className='header'>
      <div className='header_container'>
        <LogoLetter />
        <HeaderLocate />
        <HeaderMenu />
      </div>
      {login.value.login && <Login />}
    </div>
  );
}
