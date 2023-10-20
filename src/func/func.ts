import { AxiosResponse } from 'axios';
import { getInterceptor, sendAxiosState } from './interceptor';

export function getTravel(id: number, callback: (e: AxiosResponse) => void) {
  let data: sendAxiosState = {
    url: `${process.env.REACT_APP_PROXY}/gettravel`,
    data: { userid: id },
    callback: callback
  };
  getInterceptor(data);
}
