import './header.scss';
import { ReactComponent as LogoLetter } from '../../assets/svg/logo_letter.svg';
import HeaderLocate from './locate';
import HeaderMenu from './menu';
import Login from '../login/login';
import { useAppSelector } from '../../redux/hooks';
import { selectLogin } from '../../redux/slices/loginSlice';

type HeaderType = {
  type: string;
};

const temp = {
  backgroundColor: '#b9e155'
};

export default function Header({ type }: HeaderType) {
  const login = useAppSelector(selectLogin);
  return (
    <div className='header'>
      <div
        className='header_container'
        style={{
          backgroundColor: type === 'profile' ? '#b9e155' : '#000',
          color: type === 'profile' ? '#000' : '#fff'
        }}
      >
        <LogoLetter style={{ fill: type === 'profile' ? '#000' : '#fff' }} />
        <HeaderLocate />
        <HeaderMenu />
      </div>
      {login.value.login && <Login />}
    </div>
  );
}
