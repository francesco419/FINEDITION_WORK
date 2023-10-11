import MegazineCard, {
  MegazineCardType
} from '../../../page/home/megazineCard';
import { useState, useRef, useEffect } from 'react';
import _ from 'lodash';
import './cardSlide.scss';
import { useAppDispatch } from '../../../redux/hooks';
import { noClick, yesClick } from '../../../redux/slices/clickSlice';
import { useInterval } from 'usehooks-ts';
import Card from '../cardComp';
import { cardType } from '../../../page/admin/administrator';

type SlideType = {
  data: cardType[];
  type: string;
};

export default function CardSlide({ data, type }: SlideType) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const [left, setLeft] = useState<number>(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(true);

  let isDown = false;
  let startX: number;
  let scrollLeft = useRef<number>(0);
  let velX: number = 0;
  let momentumID: number;
  let scrollL: number = 1;

  /* useInterval(
    () => {
      if (ref.current) {
        const slider = ref.current;
        slider.scrollLeft = scrollLeft.current++;
        //console.log('slider.scrollLeft :' + slider.scrollLeft);
        //console.log('moving');
      }
    },
    autoSlide ? 20 : null
  ); */

  const mouseDownHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    isDown = true;
    if (ref.current) {
      dispatch(yesClick());
      const slider = ref.current;
      scrollL = slider.scrollWidth - slider.offsetWidth;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      cancelMomentumTracking();
    }
  };

  const beginMomentumTracking = () => {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  };
  const cancelMomentumTracking = () => {
    cancelAnimationFrame(momentumID);
  };
  const momentumLoop = () => {
    if (ref.current) {
      const slider = ref.current;
      slider.scrollLeft += velX;
      velX *= 0.98;
      if (Math.abs(velX) > 0.3) {
        momentumID = requestAnimationFrame(momentumLoop);
      }
    }
  };

  const downFalseHandler = () => {
    //setSlideMove();
    if (ref.current) {
      const slider = ref.current;
      isDown = false;
      slider.classList.remove('active');
      dispatch(noClick());
    }
  };

  const upHandler = () => {
    if (ref.current) {
      const slider = ref.current;
      isDown = false;
      slider.classList.remove('active');
      dispatch(noClick());
      beginMomentumTracking();
    }
  };

  const mouseMoveHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isDown) return;
    if (ref.current) {
      const slider = ref.current;
      debounceRedux(slider);
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.8; //scroll-fast
      var prevScrollLeft = slider.scrollLeft;
      slider.scrollLeft = scrollLeft.current - walk;
      velX = slider.scrollLeft - prevScrollLeft;
    }
  };

  const debounceRedux = _.debounce(
    (m: HTMLDivElement) => {
      dispatch(yesClick());
      setLeft((left) => m.scrollLeft);
    },
    1000,
    {
      leading: true
    }
  );

  const notSlideMove = () => {
    setAutoSlide((autoSlide) => false);
  };

  const setSlideMove = () => {
    setAutoSlide((autoSlide) => true);
  };

  return (
    <div className='cardSlide'>
      <div
        ref={ref}
        className='cardSlide_group'
        onMouseDown={(e) => mouseDownHandler(e)}
        onMouseLeave={downFalseHandler}
        onMouseUp={upHandler}
        onMouseMove={(e) => mouseMoveHandler(e)}
        //onMouseOver={notSlideMove}
      >
        {_.map(data, (o, index) => {
          return (
            <span style={{ margin: '0 33px 0 0' }}>
              <Card
                data={o}
                color={'#b6b2f8'}
                type={type}
                key={`${o.id}_${index}`}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
