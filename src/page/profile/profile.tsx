import Header from '../../components/header/header';
import './profile.scss';
import profile_big from '../../assets/image/profile-big.png';
import { ReactComponent as Info } from '../../assets/svg/info.svg';
import Footer from '../../components/footer/footer';
import ProfileJourney from '../../components/profile/profileJourney';

export default function Profile() {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#eaeaea' }}>
      <div className='profile'>
        <Header type='profile' />
        <div className='profile_container'>
          <div className='profile_head'>
            <h2 style={{ opacity: '0.3' }}>My Page</h2>
            <div>
              <h2>Good day, Sophie!</h2>
              <p>sophie064@google.com</p>
            </div>
          </div>
        </div>
        <div className='profile_body'>
          <div className='profile_info'>
            <div className='profile_image'>
              <img src={profile_big} />
              <div className='profile_image_collector'>
                <p>collector</p>
                <Info />
              </div>
            </div>
            <div className='profile_journey'>
              <ProfileJourney type={true} />
            </div>
            <div className='profile_initiary'>
              <p>Your Journey Initiary</p>
            </div>
          </div>
          <div className='profile_some'></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
