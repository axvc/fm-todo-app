import {
  createContext,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import * as ST from 'styles/styled';
import Image from 'next/image';
import CustomHead from 'components/custom-head';
import LightBg from 'assets/images/bg-desktop-light.jpg';
import DarkBg from 'assets/images/bg-desktop-dark.jpg';
import MoonIcon from 'assets/icons/icon-moon.svg';
import SunIcon from 'assets/icons/icon-sun.svg';
import CreateCard from 'components/views/create-card';
import TodoCard from 'components/views/todo-card';
import { Todo } from 'types/Todo';
import { Theme } from 'types/Theme';
import { Themes } from 'constants/Themes';
import { Filter } from 'types/Filter';
import { Filters } from 'constants/Filters';
import FiltersBlock from 'components/views/filters';
import useDeviceDetect from 'hooks/useDeviceDetect';
import { GlobalStyle } from 'styles/styled';

export const ThemeContext = createContext<[Theme, () => void]>([
  Themes.LIGHT,
  () => {},
]);

const Home: FC = () => {
  const { isMobile } = useDeviceDetect();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [storedTodosReceived, setStoredTodosReceived] =
    useState<boolean>(false);
  const [filter, setFilter] = useState<Filter>(Filters.ALL);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [theme, setTheme] = useState<Theme>(Themes.LIGHT);
  const lastOrder = useMemo(
    () => todos.reduce((max, todo) => Math.max(max, todo.order), 0),
    [todos],
  );

  const addTodo = (todo: Todo) => setTodos([...todos, todo]);
  const editTodo = (todo: Todo) => {
    const newTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    setTodos(newTodos);
  };
  const removeTodo = (todo: Todo) => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
      setFilteredTodos(JSON.parse(storedTodos));
    }
    setStoredTodosReceived(true);
  }, []);

  useEffect(() => {
    if (storedTodosReceived) {
      localStorage.setItem('todos', JSON.stringify(todos));
      filterTodos(filter);
    }
  }, [todos]);

  const toggleTheme = () => {
    setTheme(theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT);
  };

  const filterTodos = useCallback(
    (filter: Filter) => {
      const newTodos = {
        [Filters.ALL]: () => todos,
        [Filters.ACTIVE]: () => todos.filter((t) => !t.checked),
        [Filters.COMPLETED]: () => todos.filter((t) => t.checked),
      }[filter]();
      setFilteredTodos(newTodos);
    },
    [todos],
  );

  useEffect(() => {
    filterTodos(filter);
  }, [filter]);

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.checked);
    setTodos(newTodos);
  };
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <GlobalStyle theme={theme} />
      <ST.Container theme={theme}>
        <CustomHead />
        <Image
          src={theme === Themes.LIGHT ? LightBg : DarkBg}
          alt={'Background'}
          className="background"
        />
        <ST.TodoContainer theme={theme}>
          <ST.Header>
            <ST.Title>Todo</ST.Title>
            {theme === Themes.LIGHT ? (
              <MoonIcon onClick={toggleTheme} />
            ) : (
              <SunIcon onClick={toggleTheme} />
            )}
          </ST.Header>
          <CreateCard lastOrder={lastOrder} addTodo={addTodo} />
          <TodoCard
            todos={filteredTodos}
            filter={filter}
            lastOrder={lastOrder}
            editTodo={editTodo}
            removeTodo={removeTodo}
            reorderTodos={setFilteredTodos}
            onFilterChange={(newFilter: Filter) => setFilter(newFilter)}
            clearCompleted={clearCompleted}
          />
          {isMobile && (
            <ST.FiltersWrapper>
              <FiltersBlock
                filter={filter}
                onFilterChange={(newFilter: Filter) => setFilter(newFilter)}
              />
            </ST.FiltersWrapper>
          )}
        </ST.TodoContainer>
      </ST.Container>
    </ThemeContext.Provider>
  );
};

export default Home;
