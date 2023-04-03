import styled from 'styled-components';
import { Colors, Dark, Light } from 'constants/Colors';
import { Themes } from 'constants/Themes';
import { Theme } from 'types/Theme';

export const Filters = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  border-radius: 4px;
  color: ${Light.DARK_GRAYISH_BLUE};
  background-color: ${({ theme }) =>
    theme === Themes.LIGHT
      ? Light.VERY_LIGHT_GRAY
      : Dark.VERY_DARK_DESATURATED_BLUE};
  transition: background-color 0.2s linear;
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
