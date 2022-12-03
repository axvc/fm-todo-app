import { ChangeEvent, FC, useState } from 'react';
import * as ST from './styled';

import { Josefin_Sans } from '@next/font/google';

const josefinSans = Josefin_Sans({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

interface Props {
  text?: string;
  placeholder?: string;
  checked?: boolean;
}

const type = 'checkbox';

enum CheckboxState {
  CHECKED = 'checked',
  UNCHECKED = 'unchecked',
}

const Checkbox: FC<Props> = ({ text, checked, placeholder }) => {
  const [isChecked, setIsChecked] = useState(checked || false);
  const [inputValue, setInputValue] = useState(text || '');
  const checkboxClassName = isChecked
    ? CheckboxState.CHECKED
    : CheckboxState.UNCHECKED;
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <ST.Wrapper>
      <ST.Label>
        <ST.Checkbox
          type={type}
          className={checkboxClassName}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <ST.Input
          className={josefinSans.className}
          placeholder={placeholder}
          isCheckboxChecked={isChecked}
          value={inputValue}
          onChange={onInputChange}
        />
      </ST.Label>
    </ST.Wrapper>
  );
};

export default Checkbox;
