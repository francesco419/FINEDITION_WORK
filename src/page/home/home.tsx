import './home.scss';
import Header from '../../components/header/header';
import _ from 'lodash';
import CardSlide from '../../components/card/slide/cardSlide';
import MyProfile from './components/myProfile';
import Recommend from './components/recommned';
import FestivalHome from '../../components/festival/festival';
import NewsHome from './components/news';
import PhotoBuzz from './components/photoBuzz';
import DiscoverCities from './components/discover';
import Footer from '../../components/footer/footer';
import LocationMapCom from '../info/component/map';
import { cardData } from '../../temp/cardData';
import { cardType } from '../admin/administrator';
import souvenir from '../../assets/image/home/home-souvenir.png';
import Extras from './components/extras';
import HomeSpots from './components/spots';

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
  /* cardData[13], */
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
        <CardSlide data={data0} type='medium' />
        <CardSlide data={data1} type='medium' />
        <div
          style={{ display: 'flex', margin: '0 0 85px', padding: '50px 0 0' }}
        >
          <MyProfile />
          <Recommend />
        </div>
        <div style={{ display: 'flex' }}>
          <FestivalHome />
          <NewsHome />
        </div>
        <HomeSpots />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '100px 0 0 '
          }}
        >
          <DiscoverCities />
          <div className='home_souvenirs'>
            {/* <p>{`Look around\nFinedition Souvenirs`}</p> */}
            <img src={souvenir} />
          </div>
          <PhotoBuzz />
        </div>
        <Extras />
      </section>
      {/* <div className='homll'>a</div> */}
      <Footer />
    </div>
  );
}
