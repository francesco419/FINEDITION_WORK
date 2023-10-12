import './card.scss';
import { ReactComponent as BookMark } from '../../assets/svg/bookmark-big.svg';
import image from '../../assets/image/temp/Frame.png';
import { cardType } from '../../page/admin/administrator';
import { useNavigate } from 'react-router';

export interface MegazineCardType {
  data: cardType;
  color: string;
  click?: boolean;
  type: string;
  fcolor?: string;
}

interface cardValueType {
  data: cardType;
  type: string;
  click?: boolean;
}

const sizeof = ['small', 'medium', 'large'];

export default function Card({ data, color, type, fcolor }: MegazineCardType) {
  const nav = useNavigate();

  const navigateHandler = () => {
    nav(`/info/${data.id}/${data.typeId}`);
  };

  return (
    <dl className={`magazineCard-${type}`} onClick={navigateHandler}>
      <dt>
        <img src={data.coverImg} />
      </dt>
      <dd>
        <p>{data.coverLocate}</p>
        <p style={{ color: fcolor ? fcolor : '#fff' }}>{data.coverTitle},</p>
        <p style={{ color: fcolor ? fcolor : '#fff' }}>{data.coverAddr}</p>
      </dd>
      {/*       <dd className='cardBookMark'>
        <button>
          <BookMark style={{ stroke: color }} />
        </button>
      </dd> */}
    </dl>
  );
}
