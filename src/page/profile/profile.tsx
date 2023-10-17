import './profile.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ProfilePersonal from './components/personal';
import ProfileMyList from './components/myList';
import _ from 'lodash';
import { useAppSelector } from '../../redux/hooks';
import { selectUserInfo } from '../../redux/slices/userInfoSlice';

export default function Profile() {
  const user = useAppSelector(selectUserInfo);

  return (
    <div className='profilePage'>
      <div className='profile'>
        <Header type='yellow' />
        <div className='profile_head'>
          <h2>{`Hi, ${user.username ?? 'Someone'}`}</h2>
        </div>
        <div className='profile_body'>
          <ProfilePersonal />
          <ProfileMyList />
        </div>
        <Footer type={true} />
      </div>
    </div>
  );
}
