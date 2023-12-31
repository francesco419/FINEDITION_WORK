import './card.scss';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectRegion } from '../../../redux/slices/regionSlice';
import { useNavigate } from 'react-router';

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
  const [locationIn, setLocationIn] = useState<{ x: number; y: number }>({
    x: xy.x,
    y: xy.y
  });
  const region = useAppSelector(selectRegion);
  const nav = useNavigate();

  useEffect(() => {
    setLocationIn(xy);
  }, [region.isRegionOn === false]);

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const pos = { ...locationIn };
    pos['x'] = e.pageX - 400 - (window.innerWidth - 1440) / 2.05; // - 650;
    pos['y'] = e.pageY - 90; //- 80;
    setLocationIn((locationIn) => pos);
  };

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const navigateHandler = (str: string) => {
    nav(`/cities/`);
  };

  return (
    <div
      id={`KR${regionNum}_card`}
      className='card'
      style={{
        top: `${locationIn.y}px`,
        left: `${locationIn.x}px`,
        backgroundColor: backColor,
        opacity: location === 'Seoul' ? 1 : undefined
      }}
    >
      {/* <button
        draggable
        className='card_drag'
        onDragStart={(e) => dragStartHandler(e)}
        onDrag={(e) => dragHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
      >
        +
      </button> */}
      <div
        draggable
        onDragStart={(e) => dragStartHandler(e)}
        onDrag={(e) => dragHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
      >
        <p style={{ color: location === 'Seoul' ? '#000' : undefined }}>
          {location}
        </p>
        <pre>{text}</pre>
      </div>
      {to && (
        <button className='card_to' onClick={() => navigateHandler('temp')}>
          Explore {location.toUpperCase()}
          <Arrow />
        </button>
      )}
    </div>
  );
}
