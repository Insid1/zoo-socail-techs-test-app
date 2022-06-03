import { configureStore } from '@reduxjs/toolkit';
import animalsSlice from './animals/slice';

enum ReducerName {
  Animals = 'Animals',
}

const store = configureStore({
  reducer: {
    [ReducerName.Animals]: animalsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
