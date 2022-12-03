import { FC } from 'react';
import * as ST from './styled';
import Checkbox from 'components/ui/checkbox';

const todos = [
  { id: 1, value: 'Complete online JavaScript course', checked: true },
  { id: 2, value: 'Jog around the park 3x', checked: false },
  { id: 3, value: '10 minutes meditation', checked: false },
  { id: 4, value: 'Read for one hour', checked: false },
  { id: 5, value: 'Pick up groceries', checked: false },
];

const TodoCard: FC = () => {
  return (
    <ST.Container>
      {todos.map((todo) => (
        <ST.TodoWrapper>
          <Checkbox text={todo.value} checked={todo.checked} />
        </ST.TodoWrapper>
      ))}
    </ST.Container>
  );
};

export default TodoCard;
