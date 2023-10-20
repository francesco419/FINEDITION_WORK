import { useState, useEffect } from 'react';
import { API_TYPE } from '../../../func/interface';
import { AxiosResponse } from 'axios';
import { APIInterceptor } from '../../../func/interceptor';
import './climateRate.scss';

type ClimateRate_Type = {
  region: number;
};

export default function ClimateRate({ region }: ClimateRate_Type) {
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
