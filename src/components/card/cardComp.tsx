import './card.scss';
import { ReactComponent as BookMark } from '../../assets/svg/bookmark-big.svg';
import image from '../../assets/image/temp/Frame.png';

export interface MegazineCardType {
  img: string;
  color: string;
  click?: boolean;
  type: string;
}

const sizeof = ['small', 'medium', 'large'];

export default function Card({ img, color, type }: MegazineCardType) {
  return (
    <dl
      className={`magazineCard-${type}`}
      onClick={() => {
        console.log('to meg page');
      }}
    >
      <dt>
        <img src={img} />
      </dt>
      <dd>
        <p>Locale</p>
        <p>Gyeongbokgung Palace</p>
        <p>Jongno-gu, Seoul</p>
      </dd>
      <dd className='cardBookMark'>
        <button>
          <BookMark style={{ stroke: color }} />
        </button>
      </dd>
    </dl>
  );
}
