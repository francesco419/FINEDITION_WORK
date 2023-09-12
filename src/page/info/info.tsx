import Header from '../../components/header/header';
import './info.scss';
import frontimg from './assets/frontimg.png';
import { ReactComponent as Pick } from './assets/Storytelling.svg';
import { ReactComponent as Down } from './assets/arrow-down.svg';

export default function Info() {
  return (
    <div className='info'>
      <Header type='black' />
      <div className='info_container'>
        <div className='info_about'>
          <div className='info_about-title'>
            <h1>Namsangol Hanok Village</h1>
            <p>Jung-gu, Seoul</p>
          </div>
          <div className='info_about-detail'>
            <div className='info_about-frontimg'>
              <img src={frontimg} />
            </div>
            <div className='info_about-text'>
              <div>
                <Pick />
                <h3>Finedition Pick</h3>
              </div>
              <p>{`Situated in the heart of Seoul, this Hanok village is very near from metro and unique surroundings of Jung-gu.
As it is surrounded by Namsan park, you can enjoy hanok village and the nature at the same time.
There are some unique performances and classes held, so make sure to reserve it before you visit!`}</p>
              <p>{`The Namsangol Hanok Village offers one the opportunity to experience a wide cross-section of Joseon-eracitizenry
and activities, from royalty to commoners. A great effort has been made to accurately furnish each dwelling with
appropriate era and social status appointments. A traditional Korean style garden, complete with a flowing stream
and pavilion was constructed on the site in order to revive the classical feel of the Joseon-era. `}</p>
            </div>
            <div className='info_about-highlights d-flex'>
              <div className='d-flex'>
                <p>Surrounding Highlights</p>
                <Down />
              </div>
            </div>
          </div>
          <div className='info_about-map'></div>
          <div className='info_about-imgbox'>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='info_infomation'>
          <div className='info_infomation-view'></div>
          <ul>
            <li></li>
          </ul>
          <ul>
            <li></li>
          </ul>
          <div className='info_infomation-megazine'></div>
          <div className='info_infomation-weather'>
            <div className='info_infomation-recent'></div>
            <div className='info_infomation-calender'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
