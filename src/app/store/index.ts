import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import counterSliceReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */

export default store;
