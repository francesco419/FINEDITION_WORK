import './photoBuzz.scss';
import _ from 'lodash';
/* import { ReactComponent as GYEONGGI } from '../../../assets/svg/KR-41.svg';
import { ReactComponent as Seoul } from '../../../assets/svg/seoul.svg';
import { ReactComponent as Incheon } from '../../../assets/svg/incheon.svg'; */
import { ReactComponent as Seoul } from '../../../assets/svg/finedition_main_map.svg';

const CITYLIST = [
  {
    cities: ['GYEONG GI-DO', 'SEOUL', 'INCHEON'],
    map: []
  },
  {
    cities: ['GYEONG GI-DO', 'SEOUL', 'INCHEON'],
    map: []
  },
  {
    cities: ['GYEONG GI-DO', 'SEOUL', 'INCHEON'],
    map: []
  },
  {
    cities: ['GYEONG GI-DO', 'SEOUL', 'INCHEON'],
    map: []
  },
  {
    cities: ['GYEONG GI-DO', 'SEOUL', 'INCHEON'],
    map: []
  }
];

export default function DiscoverCities() {
  return (
    <div className='discovercities'>
      <div className='discovercities_title'>
        <h2>{`Discover Seoul\n& around cities`}</h2>
        <p>Only Seoul is available on 2023</p>
      </div>
      <div className='cityslide'>
        <div className='discovercities_cities'>
          <Seoul />
          <MapElement name={'Gyeonggi-do'} top={-10} left={130} />
          <MapElement name={'Seoul'} top={120} left={110} />
          <MapElement name={'Incheon'} top={110} left={-20} />
        </div>
      </div>
    </div>
  );
}

type MapElementType = {
  svg?: any;
  name?: string;
  top: number;
  left: number;
};

function MapElement({ svg = null, name = 'null', top, left }: MapElementType) {
  return (
    <div
      className='discovercities_city'
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      {svg ? svg : <p>{name}</p>}
    </div>
  );
}
