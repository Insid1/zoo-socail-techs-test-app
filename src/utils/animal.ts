import { IAnimal } from 'types/data-types';
import { mockData } from 'mock/mock-data';
import { nanoid } from 'nanoid';
import { getRandomInt, getRandomValueFromArr } from './common';

const getRandomAnimal = (minLvl: number, maxLvl: number): IAnimal => {
  const randAnimal = getRandomValueFromArr(mockData);
  return {
    ...randAnimal,
    id: nanoid(6),
    level: getRandomInt(minLvl, maxLvl),
  };
};

export { getRandomAnimal };
