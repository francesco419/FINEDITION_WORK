import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface LogInState {
  value: {
    login: boolean;
  };
}
const initialState: LogInState = {
  value: {
    login: false
  }
};

export const LogInSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginFormFalse: (state) => {
      state.value.login = false;
      console.log('false');
    },
    setLoginFormTrue: (state) => {
      state.value.login = true;
      console.log('true');
    }
  }
});

export const { setLoginFormFalse, setLoginFormTrue } = LogInSlice.actions;

export const selectLogin = (state: RootState) => state.login;

export default LogInSlice.reducer;
