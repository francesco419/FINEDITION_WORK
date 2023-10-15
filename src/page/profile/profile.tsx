import './profile.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ProfilePersonal from './components/personal';
import ProfileMyList from './components/myList';
import _ from 'lodash';

export default function Profile() {
  return (
    <div className='profilePage'>
      <div className='profile'>
        <Header type='yellow' />
        <div className='profile_head'>
          <h2>Hi, Sophie!</h2>
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
