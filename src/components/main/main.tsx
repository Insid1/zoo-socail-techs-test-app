import { Button, Container, MainLayout } from 'components/common/common';
import React from 'react';
import { addAnimal } from 'store/animals/slice';
import { useAppDispatch } from 'store/hooks/hooks';
import AnimalList from './animal-list/animal-list';

function Main() {
  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(addAnimal());
  };

  return (
    <MainLayout>
      <Container>
        <Button onClick={handleClick}>Catch!</Button>
      </Container>
      <Container>
        <AnimalList />
      </Container>
    </MainLayout>
  );
}

export default Main;
