import '../info.scss';
import { ReactComponent as Closed } from '../assets/closed.svg';
import { LiType } from './usetime';

export default function RestTimeComp({ text }: LiType) {
  return (
    <li className='usetime'>
      <Closed />
      <p>{`Closed on ${text}`}</p>
    </li>
  );
}
