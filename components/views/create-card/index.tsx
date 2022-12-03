import { FC } from 'react';
import * as ST from './styled';
import Checkbox from 'components/ui/checkbox';

const CreateCard: FC = () => {
  return (
    <ST.Container>
      <Checkbox placeholder={'Create a new todo...'} />
    </ST.Container>
  );
};

export default CreateCard;
