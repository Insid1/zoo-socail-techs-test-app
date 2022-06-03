import { AnimalKind, AnimalMainStat } from 'consts/enums';

interface IMockAnimal {
  type: AnimalKind,
  mainStat: AnimalMainStat,
}

interface IAnimal extends IMockAnimal {
  id: string,
  level: number,
}

export type { IAnimal, IMockAnimal };
