import './megazineCard.scss';
import { ReactComponent as BookMark } from '../../assets/svg/bookmark-big.svg';
import { useAppSelector } from '../../redux/hooks';
import { selectClick } from '../../redux/slices/clickSlice';

export interface MegazineCardType {
  img: string;
  color: string;
  click?: boolean;
  type?: boolean;
}

export default function MegazineCard({ img, color, type }: MegazineCardType) {
  const click = useAppSelector(selectClick);
  return (
    <div
      className={type ? 'megazineCard-small' : 'megazineCard-big'}
      onClick={() => {
        console.log('to meg page');
      }}
    >
      <img src={img} />
      <div
        className={
          type ? 'megazineCard-small_bookmark' : 'megazineCard-big_bookmark'
        }
      >
        <BookMark style={{ stroke: color }} />
      </div>
    </div>
  );
}
