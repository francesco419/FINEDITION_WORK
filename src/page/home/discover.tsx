import './wordBuzz.scss';
import _ from 'lodash';
import { ReactComponent as GYEONGGI } from '../../assets/svg/KR-41.svg';
import { ReactComponent as Seoul } from '../../assets/svg/seoul.svg';
import { ReactComponent as Incheon } from '../../assets/svg/incheon.svg';

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
        <h2>{`Discover\nMain Cities`}</h2>
        <ul className='discovercities_title-list'>
          {_.map(CITYLIST, (o, index) => {
            return (
              <li key={`${o.cities}_${index}`}>
                <button>{index + 1}</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='cityslide'>
        <div className='discovercities_cities'>
          <MapElement svg={<Seoul />} top={74} left={71} />
          <MapElement svg={<GYEONGGI />} top={0} left={0} />
          <MapElement svg={<Incheon />} top={87} left={22} />
          <MapElement name={'GYEONG GI-DO'} top={-10} left={150} />
          <MapElement name={'SEOUL'} top={66} left={180} />
          <MapElement name={'INCHEON'} top={186} left={10} />
        </div>
        <div className='discovercities_cities'>
          <MapElement svg={<Seoul />} top={74} left={71} />
          <MapElement svg={<GYEONGGI />} top={0} left={0} />
          <MapElement svg={<Incheon />} top={87} left={22} />
          <MapElement name={'GYEONG GI-DO'} top={-10} left={150} />
          <MapElement name={'SEOUL'} top={66} left={180} />
          <MapElement name={'INCHEON'} top={186} left={10} />
        </div>
        <div className='discovercities_cities'>
          <MapElement svg={<Seoul />} top={74} left={71} />
          <MapElement svg={<GYEONGGI />} top={0} left={0} />
          <MapElement svg={<Incheon />} top={87} left={22} />
          <MapElement name={'GYEONG GI-DO'} top={-10} left={150} />
          <MapElement name={'SEOUL'} top={66} left={180} />
          <MapElement name={'INCHEON'} top={186} left={10} />
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
