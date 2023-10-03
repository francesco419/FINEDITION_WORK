import './card.scss';
import { ReactComponent as BookMark } from '../../assets/svg/bookmark-big.svg';

export interface MegazineCardType {
  img: string;
  color: string;
  click?: boolean;
  type?: boolean;
}

export default function Card({ img, color, type }: MegazineCardType) {
  return (
    <dl
      className={type ? 'megazineCard-small' : 'megazineCard-big'}
      onClick={() => {
        console.log('to meg page');
      }}
    >
      <dd>
        <img src={img} />
      </dd>
      <dd>
        <p>Locale</p>
      </dd>
      <dt>
        <p></p>
      </dt>
      <dd>
        <p></p>
      </dd>
      <dd
        className={
          type ? 'megazineCard-small_bookmark' : 'megazineCard-big_bookmark'
        }
      >
        <BookMark style={{ stroke: color }} />
      </dd>
    </dl>
  );
}
