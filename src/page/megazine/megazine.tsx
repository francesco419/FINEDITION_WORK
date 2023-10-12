import './megazine.scss';
import { ReactComponent as Map } from '../../assets/svg/map.svg';
import { ReactComponent as Search } from '../../assets/svg/search_grey.svg';
import _ from 'lodash';
import Header from '../../components/header/header';
import MegazineCard from '../home/megazineCard';
import Footer from '../../components/footer/footer';
import ListFront from './components/listFront';
import ListCheckBox from './components/listCheckBox';
import ThemeCheckBox from './components/themeCheckBox';
import Card from '../../components/card/cardComp';
import { cardData } from '../../temp/cardData';

const cities = [
  { id: 'KR-11', name: 'Seoul' },
  { id: 'KR-28', name: 'Incheon' },
  { id: 'KR-41', name: 'Gyeonggi' },
  { id: 'KR-42', name: 'Gwangwon' },
  { id: 'KR-43', name: 'Chungbuk' },
  { id: 'KR-44', name: 'Chungnam' },
  {
    id: 'KR-30',
    name: 'Sejong & Daejeon',
    id2: 'KR-49',
    name2: 'Sejong & Daejeon'
  },
  { id: 'KR-45', name: 'Jeonbuk' },
  { id: 'KR-46', name: 'Jeonnam' },
  { id: 'KR-29', name: 'Gwangju' },
  { id: 'KR-47', name: 'Gyeongbuk' },
  { id: 'KR-48', name: 'Gyeongnam' },
  { id: 'KR-27', name: 'Daegu & Ulsan', id2: 'KR-31', name2: 'Daegu & Ulsan' },
  { id: 'KR-26', name: 'Busan' },
  { id: 'KR-50', name: 'Jeju' }
];

const theme = [
  { id: 't0', name: 'Travel' },
  { id: 't1', name: 'Spots' },
  { id: 't2', name: 'Culture' },
  { id: 't3', name: 'Food' },
  { id: 't4', name: 'Shopping' },
  { id: 't5', name: 'Insight' },
  { id: 't6', name: 'News' }
];

const DROPTEMP = [
  { text: 'Newest' },
  { text: 'Oldest' },
  { text: 'Read' },
  { text: 'Unread' },
  { text: 'Most Liked' },
  { text: 'Most Bookmarked' },
  { text: 'My Bookmark' }
];

export default function Magazine() {
  return (
    <div className='background-full'>
      <div className='citie'>
        <Header type='gray' />
        <ListFront />
        <div className='citie_section'>
          <div className='citie_search'>
            <div className='citie_search-bar'>
              <Search />
              <input type='text' placeholder='Search for keyword' />
            </div>
            <div className='citie_search-reset'>
              <button>RESET ALL</button>
            </div>
          </div>
          <div className='citie_city_region'>
            <p className='citie_city_region-title'>REGIONS</p>
            <div className='citie_city_region-check'>
              {_.map(cities, (o) => {
                return <ListCheckBox id={o.id} name={o.name} />;
              })}
            </div>
          </div>
          <div className='citie_city_map'>
            <Map />
          </div>
          <div className='citie_theme'>
            <div className='citie_theme-title'>
              <p>STORY THEME</p>
            </div>
            <div className='citie_theme-check'>
              {_.map(theme, (o) => {
                return <ThemeCheckBox id={o.id} name={o.name} />;
              })}
            </div>
          </div>
        </div>
        <div className='citie_list'>
          {_.map(cardData, (o) => {
            return <Card data={o} color={'#000'} type='small' fcolor='#000' />;
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}
