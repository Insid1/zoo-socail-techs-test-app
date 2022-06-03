import { mapToAnimalIcon } from 'maps/map-to-animal-icon';
import { memo } from 'react';
import { feedAnimal, removeAnimal } from 'store/animals/slice';
import { useAppDispatch } from 'store/hooks/hooks';
import { IAnimal } from 'types/data-types';
import { InfoField } from '../common';
import * as S from './animal-card.styled';

interface UserCardProps extends IAnimal {}

function AnimalCard({
  type, mainStat, id, level,
}: UserCardProps) {
  const AnimalIcon = mapToAnimalIcon[type];
  const dispatch = useAppDispatch();
  const handleFeedClick:React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(feedAnimal(id));
  };
  const handleFreeClick:React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(removeAnimal(id));
  };

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <AnimalIcon />
      </S.IconWrapper>
      <S.Field>
        <InfoField label="Animal:" title={type} />
        <InfoField label="Main Stat:" title={mainStat} />
      </S.Field>
      <S.Field>
        <InfoField label="Level:" title={level} />
      </S.Field>
      <S.Field>
        <S.ButtonFeed onClick={handleFeedClick}>feed</S.ButtonFeed>
        <S.ButtonFree onClick={handleFreeClick}>free</S.ButtonFree>
      </S.Field>
    </S.Wrapper>
  );
}

export default memo(AnimalCard);
