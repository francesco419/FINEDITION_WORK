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
import { ReactComponent as SlideClickLeft } from '../../../assets/svg/slideClickLeft.svg';
import { ReactComponent as SlideClickRight } from '../../../assets/svg/slideClickRight.svg';

type SlideType = {
  data: cardType[];
  type: string;
};

export default function CardSlide({ data, type }: SlideType) {
  const ref = useRef<HTMLDivElement>(null);
  const refRight = useRef<HTMLButtonElement>(null);
  const refLeft = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const [left, setLeft] = useState<number>(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(true);
  const [buttonLeft, setButtonLeft] = useState<boolean>(false);
  const [buttonRight, setButtonRight] = useState<boolean>(true);

  let maxScrollLeft: number;

  useEffect(() => {
    if (ref.current) {
      const container = ref.current;
      maxScrollLeft = container.scrollWidth - container.clientWidth;
    }
  }, []);

  /*  let isDown = false;
  let startX: number;
  let scrollLeft = useRef<number>(0);
  let velX: number = 0;
  let momentumID: number;
  let scrollL: number = 1;

  const mouseDownHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    isDown = true;
    dispatch(yesClick());
    if (ref.current) {
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
  }; */

  const onClickHandlerRight = () => {
    if (ref.current && refRight.current) {
      const container = ref.current;
      container.scroll({
        top: 0,
        left: container.scrollLeft + 1220,
        behavior: 'smooth'
      });
      buttonShow(container);
    }
  };

  const onClickHandlerLeft = () => {
    if (ref.current) {
      const container = ref.current;
      container.scroll({
        top: 0,
        left: container.scrollLeft - 1220,
        behavior: 'smooth'
      });
      buttonShow(container);
    }
  };

  const buttonShow = (num: HTMLDivElement) => {
    if (num.scrollLeft > num.scrollWidth - num.clientWidth) {
      setButtonRight((buttonRight) => false);
    } else {
      setButtonRight((buttonRight) => true);
    }
    if (num.scrollLeft !== 0) {
      setButtonLeft((buttonLeft) => true);
    } else {
      setButtonLeft((buttonLeft) => false);
    }
  };

  return (
    <div className='cardSlide'>
      {buttonLeft && (
        <button
          ref={refLeft}
          className='cardSlide-button'
          onClick={onClickHandlerLeft}
        >
          <SlideClickLeft />
        </button>
      )}
      <div
        ref={ref}
        className='cardSlide_group'
        /* onMouseDown={(e) => mouseDownHandler(e)}
          onMouseLeave={downFalseHandler}
          onMouseUp={upHandler}
          onMouseMove={(e) => mouseMoveHandler(e)}
          onMouseOver={notSlideMove} */
      >
        <div className='cardSlide-zerobase'>g</div>
        {_.map(data, (o, index) => {
          return (
            <span key={`${o.id}_card_${index}`}>
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
      {buttonRight && (
        <button
          ref={refRight}
          className='cardSlide-button'
          onClick={onClickHandlerRight}
        >
          <SlideClickRight />
        </button>
      )}
    </div>
  );
}
