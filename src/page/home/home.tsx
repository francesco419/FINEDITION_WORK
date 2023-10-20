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
import { cardData } from '../../temp/cardData';
import { cardType } from '../admin/administrator';
import Extras from './components/extras';
import HomeSpots from './components/spots';
import 'aos/dist/aos.css';
import PopUpImg from '../../components/popupimage/popUpImg';
import { storyCardData } from '../../data/storyCardData';
import Souvenirs from './components/souvenirs';

const first = [
  264337, 264138, 2, 2946681, 897540, 3, 2003918, 264340, 264132, 1, 1909500,
  264312, 264571, 7, 264106
];

const second = [
  929909, 4, 1747593, 264348, 789703, 5, 2944084, 264257, 2475097, 6, 1348621,
  264329, 8, 264351, 264116
];

export default function Home() {
  return (
    <div className='home'>
      <header>
        <Header type='black' />
      </header>
      <section>
        <div>
          <CardSlide
            data={_.shuffle(
              _.filter([...cardData, ...storyCardData], (o) => {
                return first.includes(o.id);
              })
            )}
            type='small'
          />
          <CardSlide
            data={_.shuffle(
              _.filter([...cardData, ...storyCardData], (o) => {
                return second.includes(o.id);
              })
            )}
            type='small'
          />
          <div
            style={{ display: 'flex', margin: '0 0 85px', padding: '50px 0 0' }}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <MyProfile />
            <Recommend />
          </div>
          <div
            style={{ display: 'flex' }}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <FestivalHome />
            <NewsHome />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '100px 0 0 '
            }}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <DiscoverCities />
            <Souvenirs />
            <PhotoBuzz />
          </div>
          <HomeSpots />
          <Extras />
        </div>
      </section>
      {/* <div className='homll'>a</div> */}
      <Footer type={false} />
      <PopUpImg />
    </div>
  );
}
