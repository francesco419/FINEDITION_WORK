import './festival.scss';
import festival from '../../assets/image/festival.png';
import { ReactComponent as Dot } from '../../assets/svg/dot.svg';
import { useState } from 'react';

export default function FestivalHome() {
  const [num, setNum] = useState<number>(0);
  const ChangeNum = (number: number) => {
    setNum((num) => number);
    console.log(number);
  };
  return (
    <div className='festivalHome'>
      <img src={festival} />
      <div className='festivalHome_detail'>
        <h3>Gunsan Festival, “Time Travel Journey”</h3>
        <p>
          {`2023.10.23 Thu - 28 Sun
          : Explore history in Gunsan with amazing foods
          : Ticket 10,000 for adults`}
        </p>
        <div className='festivalHome_count'>
          <FestivalDot click={ChangeNum} num={0} />
          <FestivalDot click={ChangeNum} num={1} />
          <FestivalDot click={ChangeNum} num={2} />
          <FestivalDot click={ChangeNum} num={3} />
        </div>
      </div>
    </div>
  );
}

type DotType = {
  click: (number: number) => void;
  num: number;
};
function FestivalDot({ click, num }: DotType) {
  return (
    <button onClick={() => click(num)}>
      <Dot />
    </button>
  );
}
