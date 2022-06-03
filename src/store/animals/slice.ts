import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { IAnimal } from 'types/data-types';
import { getRandomAnimal } from 'utils/animal';

const LVL_INCREMENT = 1;

interface IInitialState {
  animals: IAnimal[],
  maxLevel: number,
  minLevel: number,
}

const initialState: IInitialState = {
  animals: [],
  maxLevel: 5,
  minLevel: 1,
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
        theAnimal.level += LVL_INCREMENT;
      }
    },
  },
});

export const { addAnimal, removeAnimal, feedAnimal } = animalsSlice.actions;
export default animalsSlice;
