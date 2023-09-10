import './recommend.scss';
import { useState } from 'react';
import _ from 'lodash';
import { ReactComponent as ArrowRight } from '../../assets/svg/Arrow right.svg';

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
      <div className='recommend_title'>
        <h2>Picks* of the week</h2>
        <ArrowRight />
      </div>
      <div className='recommend_container'>
        <ul className='recommend_head'>
          {_.map(MENUTEXT, (s) => {
            return (
              <li
                style={{
                  backgroundColor: choose === s.num ? s.color : '#eaeaea',
                  opacity: choose === s.num ? '1' : '0.8'
                }}
              >
                <button
                  style={{
                    opacity: choose === s.num ? '1' : '0.3'
                  }}
                  onClick={() => onClickHandler(s.num)}
                >
                  {s.title}
                </button>
              </li>
            );
          })}
        </ul>
        <div className='recommend_card' style={{ backgroundColor: color }}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
