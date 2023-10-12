import Header from '../../components/header/header';
import CardSlide from '../../components/card/slide/cardSlide';
import './cities.scss';
import _ from 'lodash';
import FestivalSlider from '../../components/festival/festival';
import { ReactComponent as Seoul } from './assets/svg/seoul.svg';
import Card from '../../components/card/cardComp';
import Footer from '../../components/footer/footer';
import sampleImage from '../../assets/image/temp/Frame.png';
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

const numbers = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 11, 1, 1, 1, 11, 1
];

const arr = [
  '1000 drons are lighting up the sky! Dron show at Hangang',
  'Enjoy autumn foliage from the middle of October to Nov.',
  'Enjoy the autumn festivals with breezy weather',
  'Several royal palaces open at night. Don’t forget!',
  'Many cultural pop-ups coming on at Jongno'
];

const arr2 = [
  'Cheonggyechon Stream',
  'Haneul Park',
  'Changgyeonggung Palace',
  'Seonyudo Park',
  'Culture Station Seoul 284'
];

export default function Cities() {
  return (
    <div className='cityPage'>
      <Header type='black' />
      <div className='cityPage_upperContainer'>
        <div className='cityPage_upperbody'>
          <div className='cityPage_upperContainer-title'>
            <h2>SEOUL</h2>
            <h3>A Journey through Diverse Charms</h3>
            <p>
              {`Seoul, South Korea’s capital and the heart of the nation, is a city that blends a rich tapestry of traditions\nwith the vibrant pulse of modernity. It is a dynamic metropolis that unveil its profound cultural and historical significance.`}
            </p>
          </div>
          <div className='cityPage_upperContainer-slide'>
            <CardSlide data={data0} type='small' />
            <CardSlide data={data1} type='small' />
          </div>
          <div className='cityPage_upperContainer-things'>
            <div>
              <FestivalSlider />
            </div>
            <div className='things-todo'>
              <div className='things-todo_header'>
                <p>On October, 2023</p>
              </div>
              <div className='things-todo_body'>
                <ul className='things-todo_body-things'>
                  <h4>Things to do</h4>
                  {_.map(arr, (o) => {
                    return (
                      <div className='thingslist'>
                        <p>{o}</p>
                      </div>
                    );
                  })}
                </ul>
                <ul>
                  <h4>Places to visit</h4>
                  {_.map(arr2, (o) => {
                    return (
                      <div className='thingslist'>
                        <p>{o}</p>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cityPage_lowerContainer'>
        <div className='cityPage_lowerbody'>
          <div className='cityPage_lowerbody-intro'>
            <p>{`Seoul is living museum of Korea’s past\nand melting pot of contemporary culture.\nPublic transporatation is well structured\nto visit all the places in Seoul.\nMinimum three days to get a glimpse,\nbut if you stay more, you will find hidden\nlocal gems and diversity.`}</p>
          </div>
          <div className='cityPage_lowerbody-map'>
            <Seoul />
          </div>
          <div>
            <div className='cityPage_lowerbody-menu'>
              <div>
                <p>Spots in,</p>
                <p>click above map’s region</p>
              </div>
              <div>
                <button>VIEW ALL</button>
              </div>
            </div>
            <div className='cityPage_lowerbody-list'>
              {_.map(cardData, (o, index) => {
                if (index < 15)
                  return (
                    <Card data={o} color={'#000'} type='medium' fcolor='#000' />
                  );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
