import styled, { createGlobalStyle } from 'styled-components';
import { Light, Dark } from 'constants/Colors';
import { Theme } from 'types/Theme';
import { Themes } from 'constants/Themes';
import { Widths } from 'constants/Widths';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) =>
      theme === Themes.LIGHT ? Light.VERY_LIGHT_GRAY : Dark.VERY_DARK_BLUE};
  }
`;

export const Container = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme === Themes.LIGHT ? Light.VERY_LIGHT_GRAY : Dark.VERY_DARK_BLUE};
  display: flex;
  justify-content: center;
  transition: background-color 0.2s linear;
`;

export const TodoContainer = styled.div`
  z-index: 10;
  width: 40%;
  @media (max-width: ${Widths.MOBILE}) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
`;

export const Title = styled.h1`
  font-size: 36px;
  letter-spacing: 20px;
  text-transform: uppercase;
  color: ${Light.VERY_LIGHT_GRAY};
`;

export const FiltersWrapper = styled.div`
  div {
    margin-top: 20px;
    padding: 16px;
    justify-content: space-evenly;
    box-shadow: 0 20px 50px 0 rgb(0 0 0 / 10%);
  }
`;
