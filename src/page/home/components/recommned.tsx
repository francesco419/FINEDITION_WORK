import './recommend.scss';
import { useState } from 'react';
import _ from 'lodash';
import PicksofWeek from './picksofWeek';

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
