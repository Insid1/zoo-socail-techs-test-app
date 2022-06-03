import { AnimalCard } from 'components/common/common';
import { selectAnimals } from 'store/animals/selectors';
import { useAppSelector } from 'store/hooks/hooks';
import * as S from './animal-list.styled';

function AnimalList() {
  const animals = useAppSelector(selectAnimals);

  if (animals.length === 0) {
    return (
      <div>No Animal Captured:(</div>
    );
  }

  return (
    <S.List>
      {animals.map((animal) => (
        <S.ListItem key={animal.id}>
          <AnimalCard {...animal} />
        </S.ListItem>
      ))}
    </S.List>
  );
}

export default AnimalList;
