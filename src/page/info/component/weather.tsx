import axios from 'axios';
import { useEffect, useState } from 'react';
import './weather.scss';
import '../info.scss';
import _, { forEach, set } from 'lodash';
import { Link } from 'react-router-dom';
import storm from '../assets/Storm.png';
import dotenv from 'dotenv';
//dotenv.config({ path: '../.env', encoding: 'utf8' });

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

type WEATHER_FORMAT_TYPE = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

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

export interface LocationType {
  mapx: string;
  mapy: string;
}

export default function Weather({ mapx, mapy }: LocationType) {
  const [weather, setWeather] = useState<NEW_WEATHER_TYPE[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const day = ['Today', 'Tomorrow', 'Day After'];
  /*   const url = `https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(
    mapy
  )}&longitude=${parseFloat(
    mapx
  )}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=3`; */

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${mapy},${mapx}&days=3&aqi=no&alerts=no`;

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    //setWeather((weather) => []);
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
                <li>
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
              <li>
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

type WEATHER_CARD_TYPE = {
  temp: number;
  icon: string;
};

export function WeatherCard({ temp, icon }: WEATHER_CARD_TYPE) {
  return (
    <div className='weather-card'>
      <p>{temp + ' °C'}</p>
      <img src={icon} />
    </div>
  );
}
