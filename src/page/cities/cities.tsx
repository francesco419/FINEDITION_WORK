import Header from '../../components/header/header';
import CardSlide from '../home/cardSlide';
import './cities.scss';
import _ from 'lodash';
import { data } from '../../temp/megazinecard';
import FestivalSlider from '../home/festival';
import { ReactComponent as Seoul } from './assets/svg/seoul.svg';
import Card from '../../components/card/cardComp';
import Footer from '../../components/footer/footer';
import sampleImage from '../../assets/image/temp/Frame.png';

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
  '1000 drons are lighting up the sky!',
  'Enjoy autumn foliage from the middle',
  'Enjoy the autumn festivals with',
  'Several royal palaces open at night.',
  'Many cultural pop-ups coming on'
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
            {/* <CardSlide data={data} type='small' />
            <CardSlide data={data} type='small' /> */}
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
                <p>view all</p>
              </div>
            </div>
            <div className='cityPage_lowerbody-list'>
              {/* {_.map(numbers, (o, index) => {
                if (index < 15)
                  return (
                    <Card img={sampleImage} color={'#000'} type='medium' />
                  );
              })} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
