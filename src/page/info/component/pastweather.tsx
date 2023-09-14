import axios from 'axios';
import { useEffect, useState } from 'react';
import './weather.scss';
import '../info.scss';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import storm from '../assets/Storm.png';
import DatePickerComp from './datepicker';

const API = '3946877476b241f0ae1133959231409';

interface WeatherType {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: {
    code: number;
    icon: string;
    text: string;
  };
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  uv: number;
}

interface LocationType {
  mapx: string;
  mapy: string;
}

export default function PastWeather({ mapx, mapy }: LocationType) {
  const [weather, setWeather] = useState<WeatherType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [day, setDay] = useState<string>();

  useEffect(() => {
    setDate();
  }, []);

  const setDate = () => {
    const days = new Date();
    let today = `${days.getFullYear()}-${
      days.getMonth() + 1
    }-${days.getDate()}`;
    /* `${days.getFullYear()}-${
      days.getMonth() < 10 ? '0' + (days.getMonth() + 1) : days.getMonth() + 1
    }-${days.getDate() < 10 ? '0' + days.getDate() : days.getDate()}`; */
    getdata(today);
  };

  const getdata = async (day: string) => {
    await axios
      .get(
        `http://api.weatherapi.com/v1/history.json?key=${API}&q=${mapy},${mapx}&dt=${day}`
      )
      .then((e) => {
        if (e.data) {
          setWeather(e.data.forecast.forecastday[0].day);
          setLoading((loading) => true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='past-weather'>
      {loading && weather ? (
        <>
          <h3>Select date & find out weather in the past!</h3>
          <div className='past-weather_container'>
            <div className='past-weather_calender'>
              <span className='past-weather_absolute'></span>
            </div>
            <div className='past-weather_weather'>
              <p>{weather.avgtemp_c + '°C'}</p>
              <img src={weather.condition.icon} />
            </div>
          </div>
        </>
      ) : (
        <>
          <h3>Select date & find out weather in the past!</h3>
          <div className='past-weather_container'>
            <div className='past-weather_calender'>
              <span className='past-weather_absolute'></span>
            </div>
            <div className='past-weather_weather'>
              <p>No</p>
              <img src={''} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
