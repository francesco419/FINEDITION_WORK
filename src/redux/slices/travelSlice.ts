import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from '../store';
import _ from 'lodash';
import {
  postInterceptor,
  getInterceptor,
  sendAxiosState
} from '../../func/interceptor';
import axios, { AxiosResponse } from 'axios';

export interface TravelState {
  userid: number | null;
  startDate: string;
  endDate: string;
  reason: string;
  modifyDate: string;
  [prop: string]: any;
}

const initialState: TravelState = {
  userid: null,
  startDate: '',
  endDate: '',
  reason: '',
  modifyDate: ''
};

export const TravelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    getTravelInfo: (state, actions: PayloadAction<TravelState>) => {
      if (actions.payload !== undefined)
        _.forEach(state, (value, key) => {
          state[key] = actions.payload[key];
        });
    },
    setTravelInfo: (state, actions: PayloadAction<TravelState>) => {
      let data: sendAxiosState = {
        url: `${process.env.REACT_APP_PROXY}/posttravel`,
        data: { data: actions.payload },
        callback: (e: AxiosResponse) => {
          console.log(e);
        }
      };
    },
    resetTravel: (state) => {
      if (initialState !== undefined)
        _.forEach(state, (value, key) => {
          state[key] = initialState[key];
        });
    }
  }
});

export const { setTravelInfo, getTravelInfo, resetTravel } =
  TravelSlice.actions;

export const selectTravel = (state: RootState) => state.travel;

export default TravelSlice.reducer;
