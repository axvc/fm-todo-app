import styled from 'styled-components';
import { Dark, Light } from 'constants/Colors';
import { Theme } from 'types/Theme';
import { Themes } from 'constants/Themes';

export const Container = styled.div<{ theme: Theme }>`
  width: 100%;
  background-color: ${({ theme }) =>
    theme === Themes.LIGHT
      ? Light.VERY_LIGHT_GRAY
      : Dark.VERY_DARK_DESATURATED_BLUE};
  border-radius: 4px;
  transition: background-color 0.2s linear;
`;
