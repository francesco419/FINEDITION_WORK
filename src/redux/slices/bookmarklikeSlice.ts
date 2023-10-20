import {
  $CombinedState,
  PayloadAction,
  createSlice,
  current
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import _ from 'lodash';
import {
  postInterceptor,
  getInterceptor,
  sendAxiosState
} from '../../func/interceptor';
import axios, { AxiosResponse } from 'axios';

export interface BookmarkState {
  bookmark: number[];
  like: number[];
  [prop: string]: any;
}

const initialState: BookmarkState = {
  bookmark: [],
  like: []
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    getBookmark: (state, actions: PayloadAction<number[]>) => {
      state.bookmark = actions.payload;
    },
    getLike: (state, actions: PayloadAction<number[]>) => {
      state.like = actions.payload;
    }
  }
});

export const { getBookmark, getLike } = bookmarkSlice.actions;

export const selectBookmark = (state: RootState) => state.bookmark;

export default bookmarkSlice.reducer;
