import './header.scss';
import { ReactComponent as LogoLetter } from '../../assets/svg/logo_letter.svg';
import HeaderLocate from './locate';
import HeaderMenu from './menu';
import Login from '../login/login';

export default function Header() {
  return (
    <div className='header'>
      <div className='header_container'>
        <LogoLetter />
        <HeaderLocate />
        <HeaderMenu />
      </div>
      <Login />
    </div>
  );
}
