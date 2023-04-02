import styled from 'styled-components';
import { Colors, Light } from 'constants/Colors';

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

export const Filter = styled.span<{ selected: boolean }>`
  cursor: pointer;
  font-size: 14px;
  color: ${({ selected }) => (selected ? Colors.BRIGHT_BLUE : 'inherit')};

  &:hover {
    color: ${({ selected }) =>
      selected ? Colors.BRIGHT_BLUE : Light.VERY_DARK_GRAYISH_BLUE};
  }
`;

export const ClearCompleted = styled.button`
  all: unset;
  color: ${Light.DARK_GRAYISH_BLUE};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${Light.VERY_DARK_GRAYISH_BLUE};
  }
`;
