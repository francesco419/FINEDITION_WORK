import { ReactComponent as Arrow } from '../../assets/svg/Arrow back.svg';
import { ReactComponent as Plane } from '../../assets/svg/airplane.svg';
import './profileJourney.scss';

type ProfileJourneyType = {
  type: boolean;
};

export default function ProfileJourney({ type }: ProfileJourneyType) {
  //false는 메인의 작은 형태
  //true는 profile페이지의 큰 형태

  const style = type ? 'journey-big' : 'journey-small';

  return (
    <ul className={style}>
      <li>
        <p className='journey-big-fontS'>D-42 days to Seoul</p>
      </li>
      <li>
        {!type && <Arrow />}
        <Plane />
        <p className='journey-big-fontB'>Upcoming Journey</p>
        <p className='journey-big-fontS'>24.02.08 Wed ~ 02.21 Thu</p>
      </li>
      <li>
        <p className='journey-big-fontS'>18 Days l 17 Nights</p>
      </li>
    </ul>
  );
}
