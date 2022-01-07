import { VoidFunctionComponent } from "react";
import { Button as ButtonText } from '@typography';
import CloseIcon from '@mui/icons-material/Close';
import {
  CloseIconWrapper,
  FilterButtonContainer,
  FilterIcon,
  StyledButton
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
      </StyledButton>
      {open ? (
        <CloseIconWrapper onClick={handleToggle}>
          <CloseIcon /> 
        </CloseIconWrapper>
      ) : null}
    </FilterButtonContainer>  
  );
};

export default FilterButton;