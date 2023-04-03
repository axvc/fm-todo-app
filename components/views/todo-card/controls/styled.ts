import styled from 'styled-components';
import { Dark, Light } from 'constants/Colors';
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
  white-space: nowrap;
`;

export const ClearCompleted = styled.button<{ theme: Theme }>`
  all: unset;
  color: ${Light.DARK_GRAYISH_BLUE};
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) =>
      theme === Themes.LIGHT
        ? Light.VERY_DARK_GRAYISH_BLUE
        : Dark.LIGHT_GRAYISH_BLUE_HOVER};
  }
`;
