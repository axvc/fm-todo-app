import { FC, useContext } from 'react';
import * as ST from './styled';
import Checkbox from 'components/ui/checkbox';
import { Todo } from 'types/Todo';
import { ThemeContext } from 'pages/index';

interface Props {
  lastOrder: number;
  addTodo: (todo: Todo) => void;
}

const CreateCard: FC<Props> = ({ lastOrder, addTodo }) => {
  const [theme, _] = useContext(ThemeContext);
  return (
    <ST.Container theme={theme}>
      <Checkbox
        placeholder={'Create a new todo...'}
        isInitial={true}
        lastOrder={lastOrder}
        handleChange={(todo) => addTodo(todo)}
      />
    </ST.Container>
  );
};

export default CreateCard;
