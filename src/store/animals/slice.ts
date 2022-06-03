import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { IAnimal } from 'types/data-types';
import { getRandomAnimal } from 'utils/animal';

interface IInitialState {
  animals: IAnimal[],
  maxLevel: number,
  minLevel: number,
}

const initialState: IInitialState = {
  animals: [],
  maxLevel: 5,
  minLevel: 0,
};

const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    addAnimal(state) {
      state.animals.push(getRandomAnimal(state.minLevel, state.maxLevel));
    },
    removeAnimal(state, action: PayloadAction<string>) {
      state.animals = state.animals.filter(({ id }) => id !== action.payload);
    },
    feedAnimal(state, action: PayloadAction<string>) {
      const theAnimal = state.animals.find(({ id }) => id === action.payload);
      if (theAnimal) {
        theAnimal.level += 1;
      }
    },
  },
});

export const { addAnimal, removeAnimal, feedAnimal } = animalsSlice.actions;
export default animalsSlice;
