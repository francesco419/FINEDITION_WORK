import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface RegionState {
  isRegionOn: boolean;
}
const initialState: RegionState = {
  isRegionOn: false
};

export const RegionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    setRegionState: (state, action: PayloadAction<boolean>) => {
      state.isRegionOn = action.payload;
    }
  }
});

export const { setRegionState } = RegionSlice.actions;

export const selectRegion = (state: RootState) => state.region;

export default RegionSlice.reducer;
