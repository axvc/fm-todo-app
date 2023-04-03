import { FC, useContext } from 'react';
import * as ST from './styled';
import { ThemeContext } from 'pages';
import { Filter } from 'types/Filter';
import { Filters } from 'constants/Filters';

interface Props {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const FiltersBlock: FC<Props> = ({ filter, onFilterChange }) => {
  const [theme, _] = useContext(ThemeContext);
  return (
    <ST.Filters theme={theme}>
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
  );
};

export default FiltersBlock;
