import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface PopupState {
  img: string;
  show: boolean;
}

const initialState: PopupState = {
  img: '',
  show: false
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    popUpFalse: (state) => {
      state.show = false;
    },
    popUpTrue: (state, action: PayloadAction<string>) => {
      state.img = action.payload;
      state.show = true;
    }
  }
});

export const { popUpFalse, popUpTrue } = popupSlice.actions;

export const selectPopUp = (state: RootState) => state.popup;

export default popupSlice.reducer;
