import './festival.scss';
import festival from '../../assets/image/festival.png';
import { ReactComponent as Dot } from '../../assets/svg/dot.svg';
import { useState, useRef } from 'react';
import { useInterval } from 'usehooks-ts';

type FestivalRef = {
  refer: React.RefObject<HTMLDivElement>;
};

function FestivalHome({ refer }: FestivalRef) {
  return (
    <div className='festivalHome' ref={refer}>
      <div>
        <img src={festival} />
        <div className='festivalHome_detail'>
          <h3>Gunsan Festival, “Time Travel Journey”</h3>
          <p>
            {`2023.10.23 Thu - 28 Sun
          : Explore history in Gunsan with amazing foods
          : Ticket 10,000 for adults`}
          </p>
        </div>
      </div>
      <div>
        <img src={festival} />
        <div className='festivalHome_detail'>
          <h3>Gunsan Festival, “Time Travel Journey”</h3>
          <p>
            {`2023.10.23 Thu - 28 Sun
          : Explore history in Gunsan with amazing foods
          : Ticket 10,000 for adults`}
          </p>
        </div>
      </div>
      <div>
        <img src={festival} />
        <div className='festivalHome_detail'>
          <h3>Gunsan Festival, “Time Travel Journey”</h3>
          <p>
            {`2023.10.23 Thu - 28 Sun
          : Explore history in Gunsan with amazing foods
          : Ticket 10,000 for adults`}
          </p>
        </div>
      </div>
      <div>
        <img src={festival} />
        <div className='festivalHome_detail'>
          <h3>Gunsan Festival, “Time Travel Journey”</h3>
          <p>
            {`2023.10.23 Thu - 28 Sun
          : Explore history in Gunsan with amazing foods
          : Ticket 10,000 for adults`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FestivalSlider() {
  const [num, setNum] = useState<number>(0);
  const [isShowing, setIsShowing] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const ChangeNum = (number: number) => {
    if (ref.current) {
      const refer = ref.current;
      refer.style.left = `${-605 * number}px`;
    }
    setNum((num) => number);
  };

  useInterval(
    () => {
      let number = num + 1;
      if (number >= 4) number = 0;
      ChangeNum(number);
    },
    isShowing ? 5000 : null
  );

  const fasleIsShow = () => {
    setIsShowing((isShowing) => false);
  };

  const trueIsShow = () => {
    setIsShowing((isShowing) => true);
  };

  return (
    <div
      className='festivalSlider'
      onMouseEnter={fasleIsShow}
      onMouseOver={fasleIsShow}
      onMouseLeave={trueIsShow}
    >
      <FestivalHome refer={ref} />
      <div className='festivalSlider_count'>
        <FestivalDot click={ChangeNum} num={0} current={num} />
        <FestivalDot click={ChangeNum} num={1} current={num} />
        <FestivalDot click={ChangeNum} num={2} current={num} />
        <FestivalDot click={ChangeNum} num={3} current={num} />
      </div>
    </div>
  );
}

type DotType = {
  click: (number: number) => void;
  num: number;
  current: number;
};

function FestivalDot({ click, num, current }: DotType) {
  return (
    <button
      onClick={() => {
        click(num);
      }}
    >
      <Dot style={{ fill: current === num ? '#d9d9d9c9' : '#d9d9d94d' }} />
    </button>
  );
}
