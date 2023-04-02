import styled from 'styled-components';
import { Colors, Dark, Light } from 'constants/Colors';
import { Themes } from 'constants/Themes';
import { Theme } from 'types/Theme';

export const Container = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Unperformed = styled.div`
  color: ${Light.DARK_GRAYISH_BLUE};
  font-size: 14px;
`;

export const Filters = styled.div`
  color: ${Light.DARK_GRAYISH_BLUE};
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Filter = styled.span<{ theme: Theme; selected: boolean }>`
  cursor: pointer;
  font-size: 14px;
  color: ${({ selected }) => (selected ? Colors.BRIGHT_BLUE : 'inherit')};

  &:hover {
    color: ${({ selected, theme }) =>
      selected
        ? Colors.BRIGHT_BLUE
        : theme === Themes.LIGHT
        ? Light.VERY_DARK_GRAYISH_BLUE
        : Dark.LIGHT_GRAYISH_BLUE_HOVER};
  }
`;

export const ClearCompleted = styled.button<{ theme: Theme }>`
  all: unset;
  color: ${Light.DARK_GRAYISH_BLUE};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) =>
      theme === Themes.LIGHT
        ? Light.VERY_DARK_GRAYISH_BLUE
        : Dark.LIGHT_GRAYISH_BLUE_HOVER};
  }
`;
