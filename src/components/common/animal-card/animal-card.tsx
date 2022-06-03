import { InfoField } from '../common';
import * as S from './animal-card.styled';

interface UserCardProps {}

function UserCard() {
  return (
    <S.Wrapper>
      <S.Field>
        <InfoField label="id:" title="123" />
      </S.Field>
    </S.Wrapper>
  );
}

export default UserCard;
