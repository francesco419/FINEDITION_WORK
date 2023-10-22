import i264316 from '../../../assets/image/home/264316.png';
import i264550 from '../../../assets/image/home/264550.png';
import i561382 from '../../../assets/image/home/561382.png';
import uprising1 from '../../../assets/image/picksofweek/famousregion-cover.jpg';
import uprising2 from '../../../assets/image/picksofweek/transport-cover.jpg';
import uprising3 from '../../../assets/image/picksofweek/bukhansan.jpg';
import week1 from '../../../assets/image/picksofweek/snack-cover.jpg';
import week2 from '../../../assets/image/picksofweek/jonno.jpg';
import week3 from '../../../assets/image/picksofweek/culinary-cover.jpg';
import { useRef } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router';

type NumType = {
  num: number;
  color: string;
};

const temp = [
  {
    img: i264550,
    text: 'Center Namsan\nBrights the City',
    color: '#C0D6EC',
    to: '/info/264550/76'
  },
  {
    img: i264316,
    text: 'Autumn falls\ninto Palaces',
    color: '#F3F0A7',
    to: '/info/264316/76'
  },
  {
    img: i561382,
    text: 'Buckhon,\n&its heritage',
    color: '#F9FDFF',
    to: '/info/561382/76'
  }
];
const temp1 = [
  {
    img: week1,
    text: 'Classic never\ngoes out of style',
    color: '#F3F0A7',
    to: '/story/3'
  },
  {
    img: week2,
    text: 'Amazing view\nfrom Bukhansan',
    color: '#FFE9EF',
    to: '/info/1747593/76'
  },
  {
    img: week3,
    text: 'What a\nculinary adventure!',
    color: '#ACEAAA',
    to: '/story/6'
  }
];
const temp2 = [
  {
    img: uprising1,
    text: 'Five famous\nregions in Korea',
    color: '#FFFFFF',
    to: '/story/4'
  },
  {
    img: uprising2,
    text: 'Useful tips in\npublic transport',
    color: '#E1D9FC',
    to: '/story/5'
  },
  {
    img: uprising3,
    text: 'Stroll casually\nacross Jongno',
    color: '#ACEAAA',
    to: '/info/897540/76'
  }
];

export default function PicksofWeek({ num, color }: NumType) {
  const nav = useNavigate();
  const ref = useRef<HTMLParagraphElement>(null);

  const pick = num === 0 ? temp : num === 1 ? temp1 : temp2;

  const toPlace = (to: string) => {
    nav(to);
  };

  return (
    <div className='recommend_card'>
      <ul>
        {_.map(pick, (o, index) => {
          return (
            <li key={`${o.img}_${index}`} onClick={() => toPlace(o.to)}>
              <img src={o.img} />
              <p ref={ref} className='popupText' style={{ color: o.color }}>
                {o.text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
