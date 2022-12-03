import styled from 'styled-components';
import { Light } from '../constants/Colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Light.VERY_LIGHT_GRAY};
  display: flex;
  justify-content: center;
`;

export const TodoContainer = styled.div`
  z-index: 10;
  width: 40%;
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
