import './megazineCard.scss';
import { ReactComponent as BookMark } from '../../assets/svg/bookmark-big.svg';
import { useAppSelector } from '../../redux/hooks';
import { selectClick } from '../../redux/slices/clickSlice';

export interface MegazineCardType {
  img: string;
  color: string;
}

export default function MegazineCard({ img, color }: MegazineCardType) {
  const click = useAppSelector(selectClick);
  return (
    <div
      className='megazineCard'
      onClick={() => {
        if (click === false) console.log('to meg page');
      }}
    >
      <img src={img} />
      <div className='megazineCard_bookmark'>
        <BookMark style={{ stroke: color }} />
      </div>
    </div>
  );
}
