import styled from 'styled-components';
import { Colors, Light } from 'constants/Colors';

const checkedIconPath = 'icon-check.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    width: 1.5em;
    height: 1.5em;
    border-radius: 9999px;
    margin-right: 0.5em;
    border: 1px solid ${Light.LIGHT_GRAYISH_BLUE};
    outline: none;
    cursor: pointer;

    &:disabled {
      border-color: ${Light.LIGHT_GRAYISH_BLUE};
      background-color: transparent;
    }
  }

  .checked {
    background: linear-gradient(
      125deg,
      ${Colors.FIRST_CHECK_GRADIENT_COLOR},
      ${Colors.SECOND_CHECK_GRADIENT_COLOR}
    );
    position: relative;

    &::before {
      content: url('${checkedIconPath}');
      font-size: 1.5em;
      position: absolute;
      top: -7px;
      right: 0.24em;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
`;

export const Checkbox = styled.input<{ isInitial: boolean }>`
  cursor: ${({ isInitial }) => (isInitial ? 'default' : 'pointer')};
`;

export const Input = styled.input<{ isCheckboxChecked: boolean }>`
  font-family: 'Josefin Sans', sans-serif;
  outline: none;
  border: none;
  background: transparent;
  padding-top: 5px;
  text-decoration: ${(props) =>
    props.isCheckboxChecked ? 'line-through' : 'none'};
  color: ${(props) =>
    props.isCheckboxChecked
      ? Light.LIGHT_GRAYISH_BLUE
      : Light.VERY_DARK_GRAYISH_BLUE};
  width: 90%;

  &::placeholder {
    color: ${Light.DARK_GRAYISH_BLUE};
  }
`;

export const RemoveIconWrapper = styled.div`
  cursor: pointer;
  transform: translateY(3px);
`;
