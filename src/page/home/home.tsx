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
        <hr style={{ margin: '62px 0 25px' }} />
        <div style={{ display: 'flex', margin: '0 0 55px' }}>
          <MyProfile />
          <Recommend />
        </div>
        <div style={{ display: 'flex' }}>
          <FestivalHome />
          <NewsHome />
        </div>
        <hr style={{ margin: '72px 0 32px' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <WordBuzz />
          <DiscoverCities />
          <ApiMap />
        </div>
      </section>
      {/* <div className='homll'>a</div> */}
    </div>
  );
}
