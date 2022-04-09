import { VoidFunctionComponent } from "react";
import { Switch, SwitchProps } from '@atoms';
import FilterTitle, { FilterTitleProps } from '../FilterTitle';
import {
  FilterSwitchContainer
} from './styles';


interface FilterSwitchProps {

}

const FilterSwitch: VoidFunctionComponent<FilterSwitchProps & FilterTitleProps & SwitchProps> = ({
  title,
  information,
  ...switchProps
}) => {

  return (
    <FilterSwitchContainer>
      <FilterTitle
        id={switchProps.id}
        title={title}
        information={information}
        noMargin
      />
      <Switch {...switchProps} />
    </FilterSwitchContainer>
  );
}

export default FilterSwitch;