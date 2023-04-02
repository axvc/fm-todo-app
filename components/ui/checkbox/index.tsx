import {
  ChangeEvent,
  FC,
  KeyboardEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as ST from './styled';

import CrossIcon from 'assets/icons/icon-cross.svg';
import { Todo } from 'types/Todo';
import { ThemeContext } from 'pages';

interface Props {
  id?: number;
  text?: string;
  placeholder?: string;
  checked?: boolean;
  order?: number;
  lastOrder: number;
  isInitial?: boolean;
  remove?: (todo: Todo) => void;
  handleChange?: (todo: Todo) => void;
}

const type = 'checkbox';

enum CheckboxState {
  CHECKED = 'checked',
  UNCHECKED = 'unchecked',
}

const Checkbox: FC<Props> = ({
  id,
  text,
  checked,
  order,
  lastOrder,
  placeholder,
  isInitial,
  remove,
  handleChange,
}) => {
  const [theme, _] = useContext(ThemeContext);
  const [showRemoveIcon, setShowRemoveIcon] = useState(false);
  const [isChecked, setIsChecked] = useState(checked || false);
  const [inputValue, setInputValue] = useState(text || '');
  const checkboxClassName = isChecked
    ? CheckboxState.CHECKED
    : CheckboxState.UNCHECKED;
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    event.key === 'Enter' && onBlur();
  };
  const onBlur = () => {
    setTimeout(() => setShowRemoveIcon(false), 100);
    if (!inputValue) return;
    if (isInitial) {
      handleChange &&
        handleChange({
          value: inputValue,
          checked: isChecked,
          id: Date.now(),
          order: lastOrder + 1,
        });
      setInputValue('');
      setIsChecked(false);
    }
    id &&
      handleChange &&
      handleChange({
        id,
        value: inputValue,
        checked: isChecked,
        order: order || Date.now(),
      });
  };
  useEffect(() => {
    onBlur();
  }, [isChecked]);
  return (
    <ST.Wrapper theme={theme}>
      <ST.Label>
        <ST.Checkbox
          isInitial={!!isInitial}
          type={type}
          className={checkboxClassName}
          checked={isChecked}
          onChange={() => {
            setIsChecked((prev) => !prev);
          }}
          disabled={isInitial}
        />
        <ST.Input
          theme={theme}
          placeholder={placeholder}
          isCheckboxChecked={isChecked}
          value={inputValue}
          onFocus={() => setShowRemoveIcon(true)}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          onBlur={onBlur}
        />
      </ST.Label>
      {!isInitial && showRemoveIcon && (
        <ST.RemoveIconWrapper
          onClick={() =>
            remove &&
            remove({
              value: inputValue,
              checked: isChecked,
              id: id || Date.now(),
              order: order || Date.now(),
            })
          }
        >
          <CrossIcon />
        </ST.RemoveIconWrapper>
      )}
    </ST.Wrapper>
  );
};

export default Checkbox;
