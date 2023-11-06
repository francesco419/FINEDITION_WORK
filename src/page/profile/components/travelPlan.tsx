import './travelplan.scss';
import { ReactComponent as Exit } from '../../../assets/svg/exit.svg';
import {
  getInterceptor,
  postInterceptor,
  sendAxiosState
} from '../../../func/interceptor';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getTravelInfo } from '../../../redux/slices/travelSlice';
import { selectUserInfo } from '../../../redux/slices/userInfoSlice';
import { useState } from 'react';
import { AxiosResponse } from 'axios';
import TravelDate from './traveldate';
import { getTravel } from '../../../func/func';
import moment from 'moment';

type TravelPlan_Type = {
  exit: () => void;
};

export default function TravelPlan({ exit }: TravelPlan_Type) {
  let reason = '';
  const [wrong, setWrong] = useState<boolean>(false);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const user = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();

  const startHandler = (num: number) => {
    setStart((start) => num);
  };

  const endHandler = (num: number) => {
    setEnd((end) => num);
  };

  const checkValid = () => {
    if (start > 99999999 || start < 999999) {
      wrongHandler();
      return;
    }
    if (end > 99999999 || end < 999999) {
      wrongHandler();
      return;
    }
    setTravelData();
  };

  const wrongHandler = () => {
    setWrong((wrong) => true);
  };

  const setTravelData = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/posttravel`,
      data: {
        userid: user.userid,
        start: start,
        end: end,
        reason: reason,
        modify: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      callback: (e: AxiosResponse) => {
        getTravel(user.userid as number, (e) => {
          console.log(e.data.result[0]);
          if (e.data.result[0]) {
            dispatch(getTravelInfo(e.data.result[0]));
          }
          exit();
        });
      }
    };
    postInterceptor(data);
  };

  return (
    <div className='travelplan'>
      <h4>Finedition’s</h4>
      <h4>{`<Disembarkation Card For Foreigner>`}</h4>
      <TravelDate from='Origin' change={startHandler} />
      <TravelDate from='Seoul' change={endHandler} />
      <div>
        <h5>Reason for Visiting</h5>
        <input
          type='text'
          className='travelplan-reason'
          onChange={(e) => {
            reason = e.currentTarget.value;
          }}
        />
      </div>
      <button onClick={checkValid}>Submit</button>
      {wrong && (
        <label
          style={{ color: '#ff0000', fontSize: '10px', marginLeft: '10px' }}
        >
          Wrong Date Form
        </label>
      )}
      <div className='travelplan_exit'>
        <button onClick={exit}>
          <Exit />
        </button>
        {/* <button
          onClick={() => {
            dispatch(
              getTravelInfo({
                userid: 1,
                startDate: '12122024',
                endDate: '30122024',
                reason: 'just',
                modifyDate: '19102023'
              })
            );
          }}
        >
          kl;kl;
        </button> */}
      </div>
    </div>
  );
}
