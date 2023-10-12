import './recommend.scss';
import { useState } from 'react';
import _ from 'lodash';
import image from '../../../assets/image/hanoak.png';
import image2 from '../../../assets/image/castle.png';
import image3 from '../../../assets/image/street.png';
import i264316 from '../../../assets/image/home/264316.png';
import i264550 from '../../../assets/image/home/264550.png';
import i561382 from '../../../assets/image/home/561382.png';

const temp = [
  {
    img: i264550
  },
  {
    img: i264316
  },
  {
    img: i561382
  }
];
const temp1 = [
  {
    img: image2
  },
  {
    img: image2
  },
  {
    img: image2
  }
];
const temp2 = [
  {
    img: image3
  },
  {
    img: image3
  },
  {
    img: image3
  }
];

export default function Recommend() {
  const [choose, setChoose] = useState<number>(0);
  const [color, setColor] = useState<string>('#51a76d');

  const onClickHandler = (num: number) => {
    setChoose((choose) => num);
    setColor(MENUTEXT[num].color);
  };

  const MENUTEXT = [
    { title: 'Finedition', num: 0, color: '#51a76d' },
    { title: 'Weekly', num: 1, color: '#7ca1c0' },
    { title: 'Uprising', num: 2, color: '#e24bc9' }
  ];

  return (
    <div className='recommend'>
      <div className='recommend_container'>
        <ul className='recommend_head'>
          {_.map(MENUTEXT, (s, index) => {
            return (
              <li key={s.title}>
                <button
                  style={{
                    color: choose === s.num ? '#BCEB49' : '#8D8D90'
                  }}
                  onClick={() => onClickHandler(s.num)}
                >
                  {s.title}
                </button>
                {index !== MENUTEXT.length - 1 && (
                  <span style={{ margin: '0 8px' }}>
                    <p>l</p>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <PicksofWeek num={choose} color={color} />
      </div>
    </div>
  );
}

type NumType = {
  num: number;
  color: string;
};

function PicksofWeek({ num, color }: NumType) {
  const pick = num === 0 ? temp : num === 1 ? temp1 : temp2;

  return (
    <div className='recommend_card'>
      <ul>
        {_.map(pick, (o, index) => {
          return (
            <li key={`${o.img}_${index}`}>
              <img src={o.img} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
