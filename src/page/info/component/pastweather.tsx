import axios from 'axios';
import { useEffect, useState } from 'react';
import '../info.scss';
import _ from 'lodash';
import CalenderComp from './calender';
import WeatherCard from '../../../components/weather/components/weatherCard';

type WeatherType = {
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
};

type LocationType = {
  mapx: string;
  mapy: string;
};

export default function PastWeather({ mapx, mapy }: LocationType) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [weather, setWeather] = useState<WeatherType>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setDate();
  }, []);

  useEffect(() => {
    setNewDate(selectedDate);
  }, [selectedDate]);

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

  const setNewDate = (o: Date | null) => {
    const days = new Date();
    if (o) {
      let today = `${o.getFullYear()}-${o.getMonth() + 1}-${o.getDate()}`;
      getdata(today);
    }
    /* `${days.getFullYear()}-${
      days.getMonth() < 10 ? '0' + (days.getMonth() + 1) : days.getMonth() + 1
    }-${days.getDate() < 10 ? '0' + days.getDate() : days.getDate()}`; */
  };

  const getdata = async (day: string) => {
    await axios
      .get(
        `https://api.weatherapi.com/v1/history.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${mapy},${mapx}&dt=${day}`
      )
      .then((e) => {
        if (e.data) {
          setWeather(e.data.forecast.forecastday[0].day);
          console.log('fetching past weather success');
          setLoading((loading) => true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getSelectedDate = (o: Date | null) => {
    setSelectedDate(o);
  };

  return (
    <div className='past-weather'>
      {loading && weather ? (
        <ul>
          <li>
            <h3>Forecast the future weather based on past :</h3>
            <CalenderComp
              selectedDate={selectedDate}
              change={getSelectedDate}
            />
          </li>
          <li>
            <WeatherCard
              temp={weather.avgtemp_c}
              icon={weather.condition.icon}
            />
          </li>
        </ul>
      ) : (
        <>
          <h3>Select date & find out weather in the past!</h3>
          <div className='past-weather_container'>
            <CalenderComp
              selectedDate={selectedDate}
              change={getSelectedDate}
            />
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
