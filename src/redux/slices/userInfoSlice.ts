import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from '../store';
import _ from 'lodash';

export interface UserInfoState {
  id: number | null;
  name: string | null;
  email: string | null;
  nationality: string | null;
  photo: string | null;
  age: string | number | null;
  gender: string | null;
  keyword: string[] | null;
  [prop: string]: any;
}

const initialState: UserInfoState = {
  id: null,
  name: null,
  email: null,
  nationality: null,
  photo: null,
  age: null,
  gender: null,
  keyword: null
};

export const UserInfoSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    setUserInfo: (state, actions: PayloadAction<UserInfoState>) => {
      console.log(actions.payload);
      _.forEach(state, (value, key) => {
        const isValueExist = actions.payload[key];
        if (isValueExist !== null) {
          if (key === 'keyword' && typeof isValueExist === 'string') {
            state[key] = JSON.parse(isValueExist);
          }
          state[key] = isValueExist;
        }
      });
    },
    setDefault: (state) => {
      _.forEach(state, (value, key) => {
        state[key] = initialState[key];
      });
    }
  }
});

export const { setUserInfo, setDefault } = UserInfoSlice.actions;

export const selectUserInfo = (state: RootState) => state.userinfo;

export default UserInfoSlice.reducer;
