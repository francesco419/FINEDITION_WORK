type WEATHER_CARD_TYPE = {
  temp: number;
  icon: string;
};

export default function WeatherCard({ temp, icon }: WEATHER_CARD_TYPE) {
  return (
    <div className='weather-card'>
      <p>{temp + ' °C'}</p>
      <img src={icon} />
    </div>
  );
}
