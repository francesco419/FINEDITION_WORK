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

  const setTravelData = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/posttravel`,
      data: {
        userid: user.userid,
        start: start,
        end: end,
        reason: reason,
        modify: end
      },
      callback: (e: AxiosResponse) => {
        console.log(e.data);
        dispatch(getTravelInfo(e.data.result[0]));
        exit();
        getInterceptor({
          url: `${process.env.REACT_APP_PROXY}/get`,
          data: { userid: user.userid },
          callback: (o: any) => {
            console.log(o);
          }
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
      <button
        onClick={() => {
          if (start > 99999999 || end > 99999999) {
            setWrong((wrong) => true);
          } else {
            setTravelData();
          }
        }}
      >
        Submit
      </button>
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
