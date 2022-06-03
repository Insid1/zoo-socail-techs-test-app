import { AnimalKind, AnimalMainStat } from 'consts/enums';
import { IMockAnimal } from 'types/data-types';

const mockData: IMockAnimal[] = [
  {
    type: AnimalKind.Giraph,
    mainStat: AnimalMainStat.Giraph,
  },
  {
    type: AnimalKind.Wolf,
    mainStat: AnimalMainStat.Wolf,
  },
  {
    type: AnimalKind.Hippo,
    mainStat: AnimalMainStat.Hippo,
  },

];

export { mockData };
