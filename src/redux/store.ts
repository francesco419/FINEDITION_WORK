import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import session from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import clickReducer from './slices/clickSlice';
import logInReducer from './slices/loginSlice';
import userinfoReducer from './slices/userInfoSlice';
import regionReducer from './slices/regionSlice';
import travelReducer from './slices/travelSlice';
import popupReducer from './slices/popupSlice';
import viewReducer from './slices/viewSlice';
import bookmarkReducer from './slices/bookmarklikeSlice';

const rootReducer = combineReducers({
  click: clickReducer,
  login: logInReducer,
  userinfo: userinfoReducer,
  region: regionReducer,
  travel: travelReducer,
  popup: popupReducer,
  view: viewReducer,
  bookmark: bookmarkReducer
});

const persistConfig = {
  key: 'root',
  storage: session
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
