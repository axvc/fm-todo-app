import { FC, useContext } from 'react';
import * as ST from './styled';
import { ThemeContext } from 'pages';
import { Filters } from 'constants/Filters';
import { Filter } from 'types/Filter';
import { ALL_COMPLETED } from 'constants/Templates';

interface Props {
  filter: Filter;
  unperformedCount: number;
  onFilterChange: (filter: Filter) => void;
  clearCompleted: () => void;
}

const Controls: FC<Props> = ({
  filter,
  unperformedCount,
  onFilterChange,
  clearCompleted,
}) => {
  const [theme, _] = useContext(ThemeContext);
  return (
    <ST.Container theme={theme}>
      <ST.Unperformed>
        {unperformedCount > 0
          ? `${unperformedCount} items left`
          : ALL_COMPLETED}
      </ST.Unperformed>
      <ST.Filters>
        {Object.entries(Filters).map(([key, value]) => (
          <ST.Filter
            theme={theme}
            key={key}
            selected={filter === value}
            onClick={() => onFilterChange(value)}
          >
            {value}
          </ST.Filter>
        ))}
      </ST.Filters>
      <ST.ClearCompleted onClick={() => clearCompleted()}>
        Clear completed
      </ST.ClearCompleted>
    </ST.Container>
  );
};

export default Controls;
