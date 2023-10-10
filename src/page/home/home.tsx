import './home.scss';
import Header from '../../components/header/header';
import _ from 'lodash';
import CardSlide from './cardSlide';
import MyProfile from './myProfile';
import Recommend from './recommned';
import FestivalHome from './festival';
import NewsHome from './news';
import PhotoBuzz from './photoBuzz';
import DiscoverCities from './discover';
import Footer from '../../components/footer/footer';
import LocationMapCom from '../info/component/map';
import { cardData } from '../../temp/cardData';
import { cardType } from '../admin/administrator';

const data0: cardType[] = [
  cardData[0],
  cardData[1],
  cardData[2],
  cardData[3],
  cardData[4],
  cardData[5],
  cardData[6],
  cardData[7],
  cardData[8],
  cardData[9]
];

const data1: cardType[] = [
  cardData[10],
  cardData[11],
  cardData[12],
  cardData[13],
  cardData[14],
  cardData[15],
  cardData[16],
  cardData[17],
  cardData[18],
  cardData[19],
  cardData[20]
];

export default function Home() {
  return (
    <div className='home'>
      <header>
        <Header type='black' />
      </header>
      <section>
        <CardSlide data={data0} type='small' />
        <CardSlide data={data1} type='medium' />
        <CardSlide data={data1} type='big' />
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
          <DiscoverCities />
          <PhotoBuzz />
        </div>
      </section>
      {/* <div className='homll'>a</div> */}
      <Footer />
    </div>
  );
}
