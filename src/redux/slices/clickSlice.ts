import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ClickState {
  click: boolean;
}
const initialState: ClickState = {
  click: false
};

export const clickSlice = createSlice({
  name: 'click',
  initialState,
  reducers: {
    noClick: (state) => {
      state.click = false;
    },
    yesClick: (state) => {
      state.click = true;
    }
  }
});

export const { noClick, yesClick } = clickSlice.actions;

export const selectClick = (state: RootState) => state.click.click;

export default clickSlice.reducer;
