import { RootState } from 'store/store';

const selectAnimals = (state: RootState) => state.Animals.animals;

export { selectAnimals };
