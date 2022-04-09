import { VoidFunctionComponent } from "react";
import { Button as ButtonText } from '@typography';
import {
  FilterButtonContainer,
  FilterIcon,
  StyledButton,
  StyledCloseIcon
} from './styles';

interface FilterButtonProps {
  open: boolean;
  onToggle: () => void;
}

const FilterButton: VoidFunctionComponent<FilterButtonProps> = ({
  open,
  onToggle,
}) => {
  const handleToggle = () => {
    onToggle();
  };

  return (
    <FilterButtonContainer>
      <StyledButton onClick={handleToggle}>
        <ButtonText type={3}>
          {open ? 'Сховати розширений ' : 'Розширений'} фільтр
        </ButtonText>
        <FilterIcon />
        {open ? <StyledCloseIcon /> : null}
      </StyledButton>
    </FilterButtonContainer>  
  );
};

export default FilterButton;