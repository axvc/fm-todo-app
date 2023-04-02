import { FC, useContext, useMemo } from 'react';
import * as ST from './styled';
import Checkbox from 'components/ui/checkbox';
import { Todo } from 'types/Todo';
import Controls from 'components/views/todo-card/controls';
import { ThemeContext } from 'pages';
import { Filter } from 'types/Filter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { EMPTY_TODOS } from '../../../constants/Templates';

interface Props {
  todos: Todo[];
  filter: Filter;
  editTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  onFilterChange: (filter: Filter) => void;
  clearCompleted: () => void;
}

const TodoCard: FC<Props> = ({
  todos,
  filter,
  editTodo,
  removeTodo,
  onFilterChange,
  clearCompleted,
}) => {
  const [theme, _] = useContext(ThemeContext);
  const unperformedCount = useMemo(
    () => todos.filter((todo) => !todo.checked).length,
    [todos],
  );
  return (
    <ST.Container theme={theme}>
      {todos.length ? (
        <TransitionGroup>
          {todos.map((todo) => (
            <CSSTransition key={todo.id} classNames="fade" timeout={500}>
              <ST.TodoWrapper key={todo.id}>
                <Checkbox
                  id={todo.id}
                  text={todo.value}
                  checked={todo.checked}
                  remove={removeTodo}
                  handleChange={(todo) => editTodo(todo)}
                />
                <ST.Divider> </ST.Divider>
              </ST.TodoWrapper>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <ST.Empty>{EMPTY_TODOS}</ST.Empty>
      )}
      <Controls
        filter={filter}
        unperformedCount={unperformedCount}
        onFilterChange={onFilterChange}
        clearCompleted={clearCompleted}
      />
    </ST.Container>
  );
};

export default TodoCard;
