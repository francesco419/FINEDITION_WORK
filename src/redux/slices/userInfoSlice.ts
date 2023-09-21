import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from '../store';
import _ from 'lodash';

export interface UserInfoState {
  value: {
    id: string | undefined;
    username: string | undefined;
    email: string | undefined;
    nationality: string | undefined;
    photo: string | undefined;
    age: number | undefined;
    gender: string | undefined;
    keyword: string[] | undefined;
    [prop: string]: any;
  };
  [prop: string]: any;
}
const initialState: UserInfoState = {
  value: {
    id: undefined,
    username: undefined,
    email: undefined,
    nationality: undefined,
    photo: undefined,
    age: undefined,
    gender: undefined,
    keyword: undefined
  }
};

export const UserInfoSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    setUserInfo: (state, actions: PayloadAction<UserInfoState>) => {
      const obj = state.value;
      _.forEach(current(obj), (value, key) => {
        const isValueExist = actions.payload.value[key];
        if (isValueExist !== undefined) obj[key] = isValueExist;
      });
      state.value = obj;
    }
  }
});

export const { setUserInfo } = UserInfoSlice.actions;

export const selectUserInfo = (state: RootState) => state.userinfo;

export default UserInfoSlice.reducer;
