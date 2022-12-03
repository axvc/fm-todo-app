import styled from 'styled-components';
import { Light } from 'constants/Colors';

export const Container = styled.div`
  margin-top: 16px;
  width: 100%;
  border-radius: 4px;
  background-color: ${Light.VERY_LIGHT_GRAY};
  color: ${Light.VERY_DARK_GRAYISH_BLUE};
  box-shadow: 0 20px 50px 0 rgb(0 0 0 / 10%);
`;

export const TodoWrapper = styled.div`
  padding: 16px;
`;
