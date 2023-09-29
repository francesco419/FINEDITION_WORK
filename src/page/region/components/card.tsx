import './card.scss';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import { useState } from 'react';

export interface Card_Type {
  location: string;
  text: string;
  to: string | null;
  xy: { x: number; y: number };
  backColor: string;
  regionNum: string;
}

export default function Card({
  location,
  text,
  to,
  xy,
  backColor,
  regionNum
}: Card_Type) {
  const [darg, setDrag] = useState<boolean>(false);
  return (
    <div
      id={`KR${regionNum}_card`}
      className='card'
      style={{
        top: `${xy.y}px`,
        left: `${xy.x}px`,
        backgroundColor: backColor
      }}
    >
      <p>{location}</p>
      <pre>{text}</pre>
      {to && (
        <button>
          Explore {location.toUpperCase()}
          <Arrow />
        </button>
      )}
    </div>
  );
}
