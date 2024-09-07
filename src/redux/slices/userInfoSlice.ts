import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from '../store';
import _ from 'lodash';

export interface UserInfoState {
  userid: number | null;
  username: string | null;
  useremail: string | null;
  usernation: string | null;
  userImage: string | null;
  userbirth: string | number | null;
  usergender: string | null;
  userkeyword: string[] | null;
  [prop: string]: any;
}

const initialState: UserInfoState = {
  userid: null,
  username: null,
  useremail: null,
  usernation: null,
  userImage: null,
  userbirth: null,
  usergender: null,
  userkeyword: null
};

export const UserInfoSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    setUserInfo: (state, actions: PayloadAction<UserInfoState>) => {
      _.forEach(actions.payload, (value, key) => {
        const isValueExist = actions.payload[key];
        if (isValueExist !== null) {
          if (key === 'userkeyword' && typeof isValueExist === 'string') {
            state[key] = JSON.parse(isValueExist);
          } else {
            state[key] = isValueExist;
          }
        }
      });
    },
    setUpdateInfo: (state, actions: PayloadAction<any>) => {
      _.forEach(state, (value, key) => {
        const isValueExist = actions.payload[key];
        if (isValueExist !== null) {
          if (key in actions.payload) {
            state[key] = isValueExist;
          } else {
            state[key] = state[key];
          }
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

export const { setUserInfo, setDefault, setUpdateInfo } = UserInfoSlice.actions;

export const selectUserInfo = (state: RootState) => state.userinfo;

export default UserInfoSlice.reducer;
