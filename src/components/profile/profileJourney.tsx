import { ReactComponent as Arrow } from '../../assets/svg/Arrow back.svg';
import { ReactComponent as Plane } from '../../assets/svg/airplane.svg';
import { ReactComponent as PlaneBig } from '../../assets/profile/image/svg/airplanebig.svg';
import { ReactComponent as Setting } from '../../assets/profile/image/svg/settting.svg';
import './profileJourney.scss';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../redux/hooks';
import { selectUserInfo } from '../../redux/slices/userInfoSlice';
import { selectTravel } from '../../redux/slices/travelSlice';
import { useState, useEffect } from 'react';
import moment from 'moment';
import TravelPlan from '../../page/profile/components/travelPlan';

type ProfileJourneyType = {
  type: boolean;
};

export default function ProfileJourney({ type }: ProfileJourneyType) {
  const nav = useNavigate();
  const user = useAppSelector(selectUserInfo);
  const travel = useAppSelector(selectTravel);
  const [fullDate, setFullDate] = useState<string>();
  const [travelSetting, setTravelSetting] = useState<boolean>(false);
  //false는 메인의 작은 형태
  //true는 profile페이지의 큰 형태

  const style = type ? 'journey-big' : 'journey-small';

  useEffect(() => {
    getFullDate();
  }, []);

  const navTo = () => {
    if (user.id === null) {
      return;
    } else {
      nav(`/profile/${user.id}`);
    }
  };

  const getFullDate = () => {
    let today = new Date();
    let daySet = `${today.getDate()}${setMonth(
      today.getMonth() + 1
    )}${today.getFullYear()}`;
    setFullDate((fullDate) => daySet);
  };

  const calculateDday = (now: string, start: string) => {
    const time1 = moment(now, 'DDMMYYYY');
    const time2 = moment(start, 'DDMMYYYY');
    console.log(time2.year());

    return moment.duration(time2.diff(time1)).asDays();
  };

  const getYear = (date: string) => {
    const time = moment(date, 'DDMMYYYY');
    return time.year();
  };

  const getDuration = (start: string, end: string) => {
    //ddmm ~ ddmm까지
    const startDate = moment(start, 'DDMMYYYY');
    const endDate = moment(end, 'DDMMYYYY');

    return `${startDate.month() + 1}.${startDate.date()} ${getDayFromDate(
      startDate.day()
    )} - ${endDate.month() + 1}.${endDate.date()} ${getDayFromDate(
      endDate.day()
    )}`;
  };

  const getDayFromDate = (num: number) => {
    switch (num) {
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      case 7:
        return 'Sun';
    }
  };

  const setMonth = (month: number) => {
    if (month > 9) {
      return month;
    } else {
      return `0${month}`;
    }
  };

  const dayAndNight = (num: number) => {
    return `${num} Days | ${num - 1} Nights`;
  };

  const travelSettingShow = () => {
    setTravelSetting((travelSetting) => !travelSetting);
  };

  if (user.userid && travel.userid) {
    return (
      <>
        {travelSetting && <TravelPlan exit={travelSettingShow} />}
        <ul className={style}>
          <li>
            <p>
              D-{calculateDday(fullDate as string, travel.startDate)} days to
              Seoul
            </p>
          </li>
          <li>
            {type ? (
              <div>
                <PlaneBig />
                <button onClick={travelSettingShow}>
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
              <p>Upcoming: {getYear(travel.startDate)}</p>
              <p>{getDuration(travel.startDate, travel.endDate)}</p>
            </span>
          </li>
          <li>
            <p>
              {dayAndNight(calculateDday(travel.startDate, travel.endDate))}
            </p>
          </li>
        </ul>
      </>
    );
    /*Upcoming: 2024
02.08 Wed - 02.21 Thu*/
  } else {
    return (
      <ul className={style}>
        <li>
          <p>Log-in & get more information</p>
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
