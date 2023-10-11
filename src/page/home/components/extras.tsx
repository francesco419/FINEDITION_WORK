import './extras.scss';
import { ReactComponent as WorldMap } from '../../../assets/image/home/extra-world-map.svg';
import { ReactComponent as Download } from '../../../assets/image/home/svg/download.svg';
import feedback from '../../../assets/image/home/home-feedback.png';
import _ from 'lodash';

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
    <div className='home_extras'>
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
            {_.map(partnership, (o) => {
              return <a href=''>{o}</a>;
            })}
          </div>
        </div>
        <div className='home_extras-fineTraveler extrabox'>
          <h3>{`Be a Fine-traveler\nwho cares about local culture\n& environment? `}</h3>
          <span>
            <Download />
            <p>Download your own traveler-pledge</p>
          </span>
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
