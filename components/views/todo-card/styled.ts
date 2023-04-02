import styled from 'styled-components';
import { Dark, Light } from 'constants/Colors';
import { Themes } from 'constants/Themes';
import { Theme } from 'types/Theme';

export const Container = styled.div<{ theme: Theme }>`
  margin-top: 16px;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) =>
    theme === Themes.LIGHT
      ? Light.VERY_LIGHT_GRAY
      : Dark.VERY_DARK_DESATURATED_BLUE};
  transition: background-color 0.2s linear;
  color: ${Light.VERY_DARK_GRAYISH_BLUE};
  box-shadow: 0 20px 50px 0 rgb(0 0 0 / 10%);
`;

export const TodoWrapper = styled.div``;

export const Empty = styled.div<{ theme: Theme }>`
  color: ${({ theme }) =>
    theme === Themes.LIGHT
      ? Light.LIGHT_GRAYISH_BLUE
      : Dark.VERY_DARK_GRAYISH_BLUE};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px;
`;

export const Divider = styled.div<{ theme: Theme }>`
  height: 1px;
  background-color: ${({ theme }) =>
    theme === Themes.LIGHT
      ? Light.VERY_LIGHT_GRAYISH_BLUE
      : Dark.VERY_DARK_GRAYISH_BLUE_HOVER};
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;
