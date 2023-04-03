import { FC, useContext } from 'react';
import * as ST from './styled';
import { ThemeContext } from 'pages';
import { Filter } from 'types/Filter';
import { ALL_COMPLETED } from 'constants/Templates';
import useDeviceDetect from 'hooks/useDeviceDetect';
import FiltersBlock from 'components/views/filters';

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
  const { isMobile } = useDeviceDetect();
  return (
    <ST.Container theme={theme}>
      <ST.Unperformed>
        {unperformedCount > 0
          ? `${unperformedCount} items left`
          : ALL_COMPLETED}
      </ST.Unperformed>
      {!isMobile && (
        <FiltersBlock filter={filter} onFilterChange={onFilterChange} />
      )}
      <ST.ClearCompleted theme={theme} onClick={() => clearCompleted()}>
        Clear completed
      </ST.ClearCompleted>
    </ST.Container>
  );
};

export default Controls;
