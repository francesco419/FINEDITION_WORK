import './recommend.scss';
import { useState } from 'react';
import _ from 'lodash';

export default function Recommend() {
  const [choose, setChoose] = useState<number>(0);
  const [color, setColor] = useState<string>('#51a76d');

  const onClickHandler = (num: number) => {
    setChoose((choose) => num);
    setColor(MENUTEXT[num].color);
  };

  const MENUTEXT = [
    { title: 'Finedition Picks', num: 0, color: '#51a76d' },
    { title: 'Weekly bests', num: 1, color: '#7ca1c0' },
    { title: 'Uprising places', num: 2, color: '#e24bc9' }
  ];

  return (
    <div className='recommend'>
      <ul className='recommend_head'>
        {_.map(MENUTEXT, (s) => {
          return (
            <li
              style={{
                backgroundColor: choose === s.num ? s.color : '#EAEAEA',
                color: choose === 0 ? '#000' : '#161616'
              }}
            >
              <button onClick={() => onClickHandler(s.num)}>{s.title}</button>
            </li>
          );
        })}
      </ul>
      <div className='recommend_container' style={{ backgroundColor: color }}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
