import { createContext, FC } from 'react';
import * as ST from './styled';
import Image from 'next/image';
import CustomHead from 'components/custom-head';
import LightBg from 'assets/images/bg-desktop-light.jpg';
import MoonIcon from 'assets/icons/icon-moon.svg';
import CreateCard from 'components/views/create-card';
import TodoCard from 'components/views/todo-card';

const ThemeContext = createContext<string>('light');

const Home: FC = () => {
  return (
    <ThemeContext.Provider value="light">
      <ST.Container>
        <CustomHead />
        <Image src={LightBg} alt={'Background'} className="background" />
        <ST.TodoContainer>
          <ST.Header>
            <ST.Title>Todo</ST.Title>
            <MoonIcon />
          </ST.Header>
          <CreateCard />
          <TodoCard />
        </ST.TodoContainer>
      </ST.Container>
    </ThemeContext.Provider>
  );
};

export default Home;
