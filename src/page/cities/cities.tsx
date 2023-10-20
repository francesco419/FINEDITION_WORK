import Header from '../../components/header/header';
import CardSlide from '../../components/card/slide/cardSlide';
import './cities.scss';
import _ from 'lodash';
import FestivalSlider from '../../components/festival/festival';
import { ReactComponent as Seoul } from '../../assets/svg/seoul.svg';
import Card from '../../components/card/cardComp';
import Footer from '../../components/footer/footer';
import { cardData } from '../../temp/cardData';
import { cardType } from '../admin/administrator';
import { useState } from 'react';
import ClimateRate from './components/climateRate';
import SelectGu from './components/selectRegion';
import { Link } from 'react-router-dom';

const first = [
  264550, 264106, 789703, 264257, 264132, 264138, 1747593, 264116, 2944084,
  2646681, 264350, 789696, 2475097, 561382, 264571
];
const second = [
  2003918, 2944084, 264348, 929909, 2003918, 897540, 264337, 264351, 1348621,
  2541628, 1909500, 264329, 264312, 4006542, 2943972
];

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

const arr = [
  '1000 drons are lighting up the sky! Dron show at Hangang',
  'Enjoy autumn foliage from the middle of October to Nov.',
  'Enjoy the autumn festivals with breezy weather',
  'Several royal palaces open at night. Don’t forget!',
  'Many cultural pop-ups coming on at Jongno'
];

const arr2 = [
  { name: 'Cheonggyechon Stream', url: 897540 },
  { name: 'Haneul Park', url: 2944084 },
  { name: 'Changgyeonggung Palace', url: 264350 },
  { name: 'Seonyudo Park', url: 3006542 },
  { name: 'Culture Station Seoul 284', url: 1340416 }
];

export default function Cities() {
  const [region, setRegion] = useState<number>(1168000000);
  const [regionName, setRegionName] = useState<string>();

  const regionHandler = (num: number, gu: string) => {
    setRegion((region) => num);
    setRegionName((regionName) => gu);
  };

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
          <div className='cityPage_upperContainer-slide' data-aos='fade-up'>
            <CardSlide
              data={_.shuffle(
                _.filter(cardData, (o) => {
                  return first.includes(o.id);
                })
              )}
              type='small'
            />
            <CardSlide
              data={_.shuffle(
                _.filter(cardData, (o) => {
                  return first.includes(o.id);
                })
              )}
              type='small'
            />
          </div>
          <div
            className='cityPage_upperContainer-things'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
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
                  {_.map(arr, (o, index) => {
                    return (
                      <div className='thingslist' key={`${o}_${index}`}>
                        <p>{o}</p>
                      </div>
                    );
                  })}
                </ul>
                <ul>
                  <h4>Places to visit</h4>
                  {_.map(arr2, (o, index) => {
                    return (
                      <div className='thingslist' key={`${o}_${index}`}>
                        <Link to={`/info/${o.url}/76`}>{o.name}</Link>
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
          <div
            className='cityPage_lowerbody-intro'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <p>{`Seoul is living museum of Korea’s past\nand melting pot of contemporary culture.\nPublic transporatation is well structured\nto visit all the places in Seoul.\nMinimum three days to get a glimpse,\nbut if you stay more, you will find hidden\nlocal gems and diversity.`}</p>
          </div>
          <div
            className='cityPage_lowerbody-map'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <Seoul />
          </div>
          <div>
            <div className='cityPage_lowerbody-menu'>
              <div className='cityPage_lowerbody-menu-list'>
                <p>Spots in,</p>
                <SelectGu region={regionHandler} />
              </div>
              <ClimateRate region={region} />
              <div className='cityPage_lowerbody-viewall'>
                <button>VIEW ALL</button>
              </div>
            </div>
            <div className='cityPage_lowerbody-list'>
              {_.map(cardData, (o, index) => {
                if (regionName === undefined) {
                  return (
                    <Card
                      data={o}
                      color={'#000'}
                      type='medium'
                      fcolor='#000'
                      key={`${o.id}_${index}-city`}
                    />
                  );
                }
                if (_.includes(o.coverAddr, regionName))
                  return (
                    <Card
                      data={o}
                      color={'#000'}
                      type='medium'
                      fcolor='#000'
                      key={`${o.id}_${index}-city`}
                    />
                  );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer type={false} />
    </div>
  );
}
