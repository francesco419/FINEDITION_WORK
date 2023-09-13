import axios from 'axios';
import { useEffect, useState } from 'react';
import './weather.scss';

const API = 'bc8815f452854e3a7bef2c1900ca4da5';

export default function Weather() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const response = await axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=60.45&lon=-38.67&date=2023-03-30&tz=+03:00&appid=bc8815f452854e3a7bef2c1900ca4da5`
      )
      .then(() => {
        console.log(response);
        setWeather(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (weather) {
    return <div className='weather'>1</div>;
  } else {
    return <div className='weather'>2</div>;
  }
}
