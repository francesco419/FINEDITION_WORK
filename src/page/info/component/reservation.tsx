import '../info.scss';
import { ReactComponent as Reservation } from '../assets/reservation.svg';
import { LiType } from './usetime';

export default function ReservationComp({ text }: LiType) {
  return (
    <li className='usetime'>
      <Reservation />
      <p>{`No reservation`}</p>
    </li>
  );
}
