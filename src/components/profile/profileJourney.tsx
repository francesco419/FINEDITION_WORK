import { ReactComponent as Arrow } from '../../assets/svg/Arrow back.svg';
import { ReactComponent as Plane } from '../../assets/svg/airplane.svg';
import { ReactComponent as PlaneBig } from '../../assets/profile/image/svg/airplanebig.svg';
import { ReactComponent as Setting } from '../../assets/profile/image/svg/settting.svg';
import './profileJourney.scss';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../redux/hooks';
import { selectUserInfo } from '../../redux/slices/userInfoSlice';

type ProfileJourneyType = {
  type: boolean;
};

export default function ProfileJourney({ type }: ProfileJourneyType) {
  const nav = useNavigate();
  const user = useAppSelector(selectUserInfo);
  //false는 메인의 작은 형태
  //true는 profile페이지의 큰 형태

  const style = type ? 'journey-big' : 'journey-small';

  const navTo = () => {
    if (user.id === null) {
      return;
    } else {
      nav(`/profile/${user.id}`);
    }
  };

  return (
    <ul className={style}>
      <li>
        <p>D-00 days to Seoul</p>
      </li>
      <li>
        {type ? (
          <div>
            <PlaneBig />
            <button>
              <Setting />
            </button>
          </div>
        ) : (
          <div>
            <Plane />
            <button onClick={navTo}>
              <Arrow />
            </button>
          </div>
        )}
        <span>
          <p>No Upcoming</p>
          <p>Journey to Korea</p>
        </span>
      </li>
      <li>
        <p>Curate to the Finest</p>
      </li>
    </ul>
  );
}

/* return (
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
); */
