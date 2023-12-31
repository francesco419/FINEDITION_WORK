import './extras.scss';
import { ReactComponent as WorldMap } from '../../../assets/image/home/svg/extra-world-map.svg';
import { ReactComponent as Download } from '../../../assets/image/home/svg/download.svg';
import feedback from '../../../assets/image/home/home-feedback.png';
import _ from 'lodash';
import textImg from '../../../assets/image/hometext.png';

const partnership = [
  'Transport',
  'Cuisine',
  'Accomodation',
  'Intinerary',
  'Tour Arragement',
  'Scheduling',
  'Advisement'
];

export default function Extras() {
  return (
    <div className='home_extras' data-aos='fade-up' data-aos-duration='1000'>
      <div>
        <div className='home_extras-worldmap extrabox'>
          <p>{'We care our travelers from\nall over the countries'}</p>
          <WorldMap />
        </div>
      </div>
      <div>
        <div className='home_extras-partnership extrabox'>
          <h3>Welcome Partnerships!</h3>
          <p>{`Contact us if you are from companies, MICE,\nGoverment visitor. Let us find what’s best for you.`}</p>
          <div>
            {_.map(partnership, (o, index) => {
              return (
                <button type='button' key={`${o}_${index}`}>
                  {o}
                </button>
              );
            })}
          </div>
        </div>
        <div className='home_extras-fineTraveler extrabox'>
          <img src={textImg} />
          {/* <h3>{`Be a Fine-traveler\nwho cares about local culture\n& environment? `}</h3> */}
          {/* <span>
            <Download />
            <p>Download your own traveler-pledge</p>
          </span> */}
          <ul>
            <li>
              <p>Conserve water and energy.</p>
            </li>
            <li>
              <p>Buy from local markets and artisans.</p>
            </li>
            <li>
              <p>Familiarize with local laws and customs.</p>
            </li>
            <li>
              <p>how respect for local residents.</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className='home_extras-feedback extrabox'>
          <h3>{`Give us feedbacks,\nSo we can improve more!`}</h3>
          <p>finedition.kr@gmail.com</p>
          <img src={feedback} />
        </div>
      </div>
    </div>
  );
}
