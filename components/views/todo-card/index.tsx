import { FC, useContext, useMemo } from 'react';
import * as ST from './styled';
import Checkbox from 'components/ui/checkbox';
import { Todo } from 'types/Todo';
import Controls from 'components/views/todo-card/controls';
import { ThemeContext } from 'pages';
import { Filter } from 'types/Filter';
import { EMPTY_TODOS } from 'constants/Templates';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import DraggableListItem from '../../ui/draggable-list-item';

interface CustomDropResult extends DropResult {
  draggableId: string;
}

interface Props {
  todos: Todo[];
  filter: Filter;
  lastOrder: number;
  editTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  reorderTodos: (todos: Todo[]) => void;
  onFilterChange: (filter: Filter) => void;
  clearCompleted: () => void;
}

const TodoCard: FC<Props> = ({
  todos,
  filter,
  lastOrder,
  editTodo,
  removeTodo,
  reorderTodos,
  onFilterChange,
  clearCompleted,
}) => {
  const [theme, _] = useContext(ThemeContext);
  const unperformedCount = useMemo(
    () => todos.filter((todo) => !todo.checked).length,
    [todos],
  );

  // TODO: fix problem with drag and drop order that not save
  const handleDragEnd = (result: CustomDropResult) => {
    if (!result.destination) {
      return;
    }

    const newTodos = Array.from(todos);
    const [reorderedItem] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, reorderedItem);

    newTodos.forEach((todo, index) => {
      todo.order = index + 1;
    });

    reorderTodos(newTodos);
  };

  return (
    <ST.Container theme={theme}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ST.List {...provided.droppableProps} ref={provided.innerRef}>
              <TransitionGroup component={null}>
                {todos
                  .sort((a, b) => a.order - b.order)
                  .map((todo, index) => (
                    <CSSTransition
                      key={todo.id}
                      classNames="fade"
                      timeout={500}
                    >
                      <Draggable
                        key={todo.id}
                        draggableId={String(todo.id)}
                        index={index}
                      >
                        {(provided) => (
                          <DraggableListItem key={todo.id} provided={provided}>
                            <ST.TodoWrapper>
                              <Checkbox
                                id={todo.id}
                                text={todo.value}
                                checked={todo.checked}
                                order={todo.order}
                                lastOrder={lastOrder}
                                remove={removeTodo}
                                handleChange={(todo) => editTodo(todo)}
                              />
                              <ST.Divider theme={theme}> </ST.Divider>
                            </ST.TodoWrapper>
                          </DraggableListItem>
                        )}
                      </Draggable>
                    </CSSTransition>
                  ))}
                {provided.placeholder}
              </TransitionGroup>
            </ST.List>
          )}
        </Droppable>
      </DragDropContext>
      {!todos.length && <ST.Empty theme={theme}>{EMPTY_TODOS}</ST.Empty>}
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
