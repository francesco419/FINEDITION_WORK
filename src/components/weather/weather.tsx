import axios from 'axios';
import { useEffect, useState } from 'react';
import './weather.scss';
import _ from 'lodash';
import storm from '../../page/info/assets/Storm.png';
import { LocationType } from '../../func/interface';
import WeatherCard from './components/weatherCard';

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

type WEATHER_TYPE = {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    uv: number;
  };
  astro: any;
  hour: any;
};

type NEW_WEATHER_TYPE = {
  date: string;
  avgtemp_c: number;
  text: string;
  icon: string;
  code: number;
};

export default function Weather({ mapx, mapy }: LocationType) {
  const [weather, setWeather] = useState<NEW_WEATHER_TYPE[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const day = ['Today', 'Tomorrow', 'Day After'];

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${mapy},${mapx}&days=3&aqi=no&alerts=no`;

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    await axios
      .get(url)
      .then((e) => {
        if (e.data) {
          e.data.forecast.forecastday.forEach((o: WEATHER_TYPE) => {
            setWeather((weather) => [
              ...weather,
              {
                date: o.date,
                avgtemp_c: o.day.avgtemp_c,
                text: o.day.condition.text,
                icon: o.day.condition.icon,
                code: o.day.condition.code
              }
            ]);
          });
          setLoading((loading) => true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='recent-weather'>
      {loading ? (
        <ul>
          {_.map(day, (o, index) => {
            if (weather) {
              return (
                <li key={`${o}_${index}`}>
                  <h4>{o}</h4>
                  <WeatherCard
                    temp={weather[index].avgtemp_c}
                    icon={weather[index].icon}
                  />
                </li>
              );
            }
          })}
        </ul>
      ) : (
        <ul>
          {_.map(day, (o, index) => {
            return (
              <li key={`${o}_${index}`}>
                <h4>{o}</h4>
                <div style={{ justifyContent: 'center' }}>
                  <img src={storm} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
