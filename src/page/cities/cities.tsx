import Header from '../../components/header/header';
import CardSlide from '../../components/card/slide/cardSlide';
import './cities.scss';
import _, { drop } from 'lodash';
import FestivalSlider from '../../components/festival/festival';
import { ReactComponent as Seoul } from './assets/svg/seoul.svg';
import { ReactComponent as Down } from '../../assets/svg/sort_down.svg';
import Card from '../../components/card/cardComp';
import Footer from '../../components/footer/footer';
import sampleImage from '../../assets/image/temp/Frame.png';
import { cardData } from '../../temp/cardData';
import { cardType } from '../admin/administrator';
import { useEffect } from 'react';
import { APIInterceptor } from '../../func/interceptor';
import { AxiosResponse } from 'axios';
import { API_TYPE } from '../../func/interface';
import { useState } from 'react';

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
  const [region, setRegion] = useState<number>(1168000000);

  const regionHandler = (num: number) => {
    setRegion((region) => num);
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
                if (index < 15)
                  return (
                    <Card data={o} color={'#000'} type='medium' fcolor='#000' />
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

type ClimateRate_Type = {
  region: number;
};

function ClimateRate({ region }: ClimateRate_Type) {
  const [rate, setRate] = useState<string>('');

  useEffect(() => {
    getAPI();
  }, []);

  useEffect(() => {
    getAPI();
  }, [region]);

  const getAPI = () => {
    let data: API_TYPE = {
      url: `https://apis.data.go.kr/1360000/TourStnInfoService1/getCityTourClmIdx1?serviceKey=${
        process.env.REACT_APP_TOUR_KEY
      }&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=${getDate()}&DAY=0&CITY_AREA_ID=${region}`,
      callback: (res: AxiosResponse) => {
        if (res.data.response.body.items.item) {
          const rateData = res.data.response.body.items.item[0];
          switchRate(rateData);
          console.log(rateData);
        }
      }
    };
    APIInterceptor(data);
  };

  function getDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = addZero(date.getMonth());
    let day = addZero(date.getDate() - 1);

    return `${year}${month}${day}`;
  }

  function switchRate(rate: string) {
    switch (rate) {
      case '나쁨':
        setRate((rate) => 'Bad');
        return;
      case '보통':
        setRate((rate) => 'Good');
        return;
      case '좋음':
        setRate((rate) => 'Very Good');
        return;
      case '매우좋음':
        setRate((rate) => 'Excellent');
        return;
      default:
        setRate((rate) => 'Good');
        return;
    }
  }

  const addZero = (num: number) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  return (
    <div className='climateRate'>
      <div>
        <p>{`Climate rate : ${rate}`}</p>
      </div>
      <span>
        <p>powered by 기상청</p>
      </span>
    </div>
  );
}

const cityArr = [
  { cityId: 1132000000, cityName: 'Dobong' },
  { cityId: 1123000000, cityName: 'Dongdaemun' },
  { cityId: 1159000000, cityName: 'Dongjak' },
  { cityId: 1138000000, cityName: 'Eunpyeong' },
  { cityId: 1168000000, cityName: 'Gangnam' },
  { cityId: 1174000000, cityName: 'Gangdong' },
  { cityId: 1130500000, cityName: 'Gangbuk' },
  { cityId: 1150000000, cityName: 'Gangseo' },
  { cityId: 1162000000, cityName: 'Gwanak' },
  { cityId: 1121500000, cityName: 'Gwangjin' },
  { cityId: 1153000000, cityName: 'Guro' },
  { cityId: 1154500000, cityName: 'Geumcheon' },
  { cityId: 1111000000, cityName: 'Jongno' },
  { cityId: 1114000000, cityName: 'Jung-gu' },
  { cityId: 1126000000, cityName: 'Jungnang' },
  { cityId: 1144000000, cityName: 'Mapo' },
  { cityId: 1135000000, cityName: 'Nowon' },
  { cityId: 1141000000, cityName: 'Seodamun' },
  { cityId: 1165000000, cityName: 'Seocho' },
  { cityId: 1120000000, cityName: 'Seongdong' },
  { cityId: 1129000000, cityName: 'Seongbuk' },
  { cityId: 1171000000, cityName: 'Songpa' },
  { cityId: 1147000000, cityName: 'Yangcheon' },
  { cityId: 1156000000, cityName: 'Yeongdeungpo' },
  { cityId: 1117000000, cityName: 'Yongsan' }
];

type Gu_Type = {
  region: (num: number) => void;
};

function SelectGu({ region }: Gu_Type) {
  const [inputText, setInputText] = useState<string>('Select Gu');
  const [dropDown, setDropDown] = useState<boolean>(false);

  const onClickDropHandler = () => {
    setDropDown((dropDown) => !dropDown);
  };

  const onClickInputHandler = (num: number, str: string) => {
    setInputText((inputText) => str);
    region(num);
    onClickDropHandler();
  };

  return (
    <div className='select-gu'>
      <button className='select-gu-button' onClick={onClickDropHandler}>
        <Down />
        {inputText}
      </button>
      {dropDown && (
        <ul>
          {_.map(cityArr, (o) => {
            return (
              <li>
                <button
                  onClick={() => onClickInputHandler(o.cityId, o.cityName)}
                >
                  {o.cityName}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
