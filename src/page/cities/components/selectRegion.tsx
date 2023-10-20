import { useState } from 'react';
import { ReactComponent as Down } from '../../../assets/svg/sort_down.svg';
import _ from 'lodash';
import './selectgu.scss';

const cityArr = [
  { cityId: 9999, cityName: 'View All' },
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
  region: (num: number, gu: string) => void;
};

export default function SelectGu({ region }: Gu_Type) {
  const [inputText, setInputText] = useState<string>('View All');
  const [dropDown, setDropDown] = useState<boolean>(false);

  const onClickDropHandler = () => {
    setDropDown((dropDown) => !dropDown);
  };

  const onClickInputHandler = (num: number, str: string) => {
    setInputText((inputText) => str);
    region(num, str);
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
              <li key={`${o.cityId}_${o.cityName}`}>
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
