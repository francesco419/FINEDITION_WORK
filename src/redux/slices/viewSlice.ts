import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ViewState {
  view: number[];
}
const initialState: ViewState = {
  view: []
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    addView: (state, action: PayloadAction<number>) => {
      if (state.view.includes(action.payload)) {
        return;
      }
      state.view.push(action.payload);
    }
  }
});

export const { addView } = viewSlice.actions;

export const selectView = (state: RootState) => state.view;

export default viewSlice.reducer;
