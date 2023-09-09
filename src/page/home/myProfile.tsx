import './myProfile.scss';
import profileImg from '../../assets/image/profile.png';
import { ReactComponent as Arrow } from '../../assets/svg/Arrow back.svg';
import { ReactComponent as Plane } from '../../assets/svg/airplane.svg';

export default function MyProfile() {
  return (
    <div className='myProfile'>
      <div className='myProfile_head'>
        <p>My Finedition</p>
      </div>
      <div className='myProfile_container'>
        <div className='myProfile_imgbox'>
          <div className='myProfile_imgbox-tag'>
            <p>Collector</p>
          </div>
          <img src={profileImg} />
        </div>
        <ul className='myProfile_detail'>
          <li>
            <p>D-42 days to Seoul</p>
          </li>
          <li>
            <Arrow />
            <Plane />
            <p>Upcoming Journey</p>
            <p>24.02.08 Wed ~ 02.21 Thu</p>
          </li>
          <li>
            <p>18 Days l 17 Nights</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
