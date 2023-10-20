import './travelplan.scss';
import { ReactComponent as Exit } from '../../../assets/svg/exit.svg';
import { sendAxiosState } from '../../../func/interceptor';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getTravelInfo } from '../../../redux/slices/travelSlice';
import { selectUserInfo } from '../../../redux/slices/userInfoSlice';
import { useState } from 'react';
import { AxiosResponse } from 'axios';

type TravelPlan_Type = {
  exit: () => void;
};

export default function TravelPlan({ exit }: TravelPlan_Type) {
  let start = '';
  let end = '';
  let reason = '';
  const user = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();

  const setTravelData = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/posttravel`,
      data: { userid: user.userid, start: start, end: end, reason: reason },
      callback: (e: AxiosResponse) => {
        dispatch(getTravelInfo(e.data.result[0]));
      }
    };
  };

  return (
    <div className='travelplan'>
      <h4>Finedition’s</h4>
      <h4>{`<Disembarkation Card For Foreigner>`}</h4>
      <TravelDate from='Origin' />
      <TravelDate from='Seoul' />
      <div>
        <h5>Reason for Visiting</h5>
        <input type='text' className='travelplan-reason' />
      </div>
      <button onClick={() => {}}>Submit</button>
      <div className='travelplan_exit'>
        <button onClick={exit}>
          <Exit />
        </button>
      </div>
    </div>
  );
}

type TravelDate_Type = {
  from: string;
};

function TravelDate({ from }: TravelDate_Type) {
  return (
    <div className='traveldate'>
      <h5>Departing from {from}</h5>
      <div className='traveldate_inputbox'>
        <div>
          <input type='text' placeholder='DD/MM/YYYY' />
          <label>Departure Date</label>
        </div>
        <div>
          <input type='text' />
          <label>Departure City</label>
        </div>
      </div>
    </div>
  );
}
