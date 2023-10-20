import './festival.scss';
import festival from '../../../assets/image/festival.png';
import { ReactComponent as Dot } from '../../assets/svg/dot.svg';
import { useState, useRef } from 'react';
import { useInterval } from 'usehooks-ts';
import _ from 'lodash';
import { festivalData } from '../../data/festival';

interface FestivalClickType {
  num: number;
  click: (number: number) => void;
}

interface FestivalRefType extends FestivalClickType {
  refer: React.RefObject<HTMLDivElement>;
}

interface FestivalDotType extends FestivalClickType {
  current: number;
}

const SLIDEWIDTH: number = 613;

export default function FestivalSlider() {
  const [isShowing, setIsShowing] = useState<boolean>(true);
  const [num, setNum] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const changeIsShow = (bool: boolean) => {
    setIsShowing((isShowing) => bool);
  };

  const ChangeNum = (number: number) => {
    if (ref.current) {
      const reference = ref.current;
      reference.style.left = `${-SLIDEWIDTH * number}px`;
    }
    setNum((num) => number);
  };

  /* useInterval(
    () => {
      let number = num + 1;
      if (number >= 4) number = 0;
      ChangeNum(number);
    },
    isShowing ? 5000 : null
  ); */

  return (
    <div
      className='festivalSlider'
      onMouseEnter={() => changeIsShow(false)}
      onMouseOver={() => changeIsShow(false)}
      onMouseLeave={() => changeIsShow(true)}
    >
      <FestivalHome refer={ref} num={num} click={ChangeNum} />
    </div>
  );
}

function FestivalHome({ refer, num, click }: FestivalRefType) {
  return (
    <div className='festivalHome' ref={refer}>
      {_.map(festivalData, (o, index) => {
        return (
          <div className='festivalHome_part' key={`${o.name}_${index}`}>
            <div
              className='festivalHome_image'
              onClick={() => {
                window.open(o.to);
              }}
            >
              <img src={o.img} />
            </div>
            <div className='festivalHome_detail'>
              <h3
                onClick={() => {
                  window.open(o.to);
                }}
              >
                {o.name}
              </h3>
              <p>{o.detail}</p>
              <FestivalNav num={num} click={click} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FestivalNav({ num, click }: FestivalClickType) {
  return (
    <div className='festivalHome_count'>
      {_.map([0, 1, 2, 3], (index) => {
        if (num !== undefined)
          return (
            <FestivalDot
              click={click}
              num={index}
              current={num}
              key={`${index}`}
            />
          );
      })}
    </div>
  );
}

function FestivalDot({ click, num, current }: FestivalDotType) {
  return (
    <button onClick={() => click(num)}>
      <Dot style={{ fill: current === num ? '#d9d9d9c9' : '#d9d9d94d' }} />
    </button>
  );
}
