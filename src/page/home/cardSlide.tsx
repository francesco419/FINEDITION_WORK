import MegazineCard, { MegazineCardType } from './megazineCard';
import { useState, useRef } from 'react';
import _ from 'lodash';
import './cardSlide.scss';
import { useAppDispatch } from '../../redux/hooks';
import { noClick, yesClick } from '../../redux/slices/clickSlice';

type SlideType = {
  data: MegazineCardType[];
};

export default function CardSlide({ data }: SlideType) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const [down, setDown] = useState<boolean>(false);
  const [point, setPoint] = useState<number>(0);
  const [x, setX] = useState<number>(0);

  const mouseDownHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setDown((down) => true);
    if (ref.current) {
      setPoint((point) => e.pageX);
      setX(ref.current.scrollLeft);
    }
  };

  const downFalseHandler = () => {
    if (down) {
      setDown((down) => false);
      setTimeout(() => {
        dispatch(noClick());
      }, 300);
    }
  };

  const mouseMoveHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!down) return;

    e.preventDefault();

    debounceRedux();

    if (ref.current) {
      const move = e.pageX - point;
      ref.current.scrollLeft = x - move;
    }
  };

  const debounceRedux = _.debounce(() => dispatch(yesClick()), 1000, {
    leading: true
  });

  return (
    <div className='cardSlide'>
      <div
        ref={ref}
        className='cardSlide_group'
        onMouseDown={(e) => mouseDownHandler(e)}
        onMouseLeave={downFalseHandler}
        onMouseUp={downFalseHandler}
        onMouseMove={(e) => mouseMoveHandler(e)}
      >
        {_.map(data, (o) => {
          return <MegazineCard img={o.img} color={o.color} />;
        })}
      </div>
    </div>
  );
}
