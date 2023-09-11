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
  const [left, setLeft] = useState<number>(0);

  let isDown = false;
  let startX: number;
  let scrollLeft: number;
  let velX: number = 0;
  let momentumID: number;
  let scrollL: number = 1;

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
      scrollLeft = slider.scrollLeft;
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
    if (ref.current) {
      const slider = ref.current;
      isDown = false;
      slider.classList.remove('active');
      dispatch(noClick());
    }
    console.log(scrollL, left);
  };

  const upHandler = () => {
    if (ref.current) {
      const slider = ref.current;
      isDown = false;
      slider.classList.remove('active');
      dispatch(noClick());
      beginMomentumTracking();
    }
    console.log(scrollL, left);
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
      slider.scrollLeft = scrollLeft - walk;
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

  return (
    <div className='cardSlide'>
      <div
        ref={ref}
        className='cardSlide_group'
        onMouseDown={(e) => mouseDownHandler(e)}
        onMouseLeave={downFalseHandler}
        onMouseUp={upHandler}
        onMouseMove={(e) => mouseMoveHandler(e)}
      >
        {_.map(data, (o) => {
          return <MegazineCard img={o.img} color={o.color} type={true} />;
        })}
      </div>
      <div
        className='cardSlide_blur'
        style={{
          backgroundColor: left >= scrollL ? '#00000000' : '#00000050'
        }}
      />
    </div>
  );
}

/*  const mouseDownHandler = (
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
  }; */

/*   const mouseDownHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setDown((down) => true);
    if (ref.current) {
      setPoint((point) => e.pageX);
      setX(ref.current.scrollLeft);
    }
  };

  const downFalseHandler = () => {
    if (ref.current) {
      if (down) {
        if (x > 0) {
          setX(0);
        }
        if (x < 1300 - ref.current.offsetWidth) {
          setX(1300 - ref.current.offsetWidth);
        }
        setDown((down) => false);
        setTimeout(() => {
          dispatch(noClick());
        }, 300);
      }
    }
  };

  const mouseMoveHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!down) return;

    e.preventDefault();

    //debounceRedux();

    if (ref.current) {
      if (e.pageX < point) {
        setX((x) => x - 3);
        return;
      }

      if (e.pageX > point) {
        setX((x) => x + 3);
        return;
      }
      debounceRedux();

      if (ref.current) {
        const move = e.pageX - point;
        ref.current.scrollLeft = x - move;
      }
    }
  }; */
