import './home.scss';
import Header from '../../components/header/header';
import _ from 'lodash';
import CardSlide from './cardSlide';
import { data, data1 } from '../../temp/megazinecard';
import MyProfile from './myProfile';
import Recommend from './recommned';
import FestivalHome from './festival';
import NewsHome from './news';
import WordBuzz from './wordBuzz';
import DiscoverCities from './discover';
import ApiMap from './apiMap';

export default function Home() {
  return (
    <div className='home'>
      <header>
        <Header />
      </header>
      <section>
        <CardSlide data={data} />
        <CardSlide data={data1} />
        <div style={{ display: 'flex', margin: '8px 0 40px' }}>
          <MyProfile />
          <Recommend />
        </div>
        <div style={{ display: 'flex' }}>
          <FestivalHome />
          <NewsHome />
        </div>
        <div
          style={{
            display: 'flex',
            margin: '41px 0 0',
            justifyContent: 'space-between'
          }}
        >
          <WordBuzz />
          <DiscoverCities />
          <ApiMap />
        </div>
      </section>
    </div>
  );
}
