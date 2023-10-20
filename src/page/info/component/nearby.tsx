import '../info.scss';
import { ReactComponent as NearBy } from '../assets/stationsvg.svg';

type Station_Type = {
  station: string | undefined;
};

export default function NearbyComp({ station }: Station_Type) {
  return (
    <li className='usetime'>
      <NearBy />
      <p>{station}</p>
    </li>
  );
}
