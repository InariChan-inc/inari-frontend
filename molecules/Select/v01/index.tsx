import { VoidFunctionComponent } from "react";
import {
  FormControl,
  SelectProps as MuiSelectProps
} from "@mui/material";
import {
  SelectContainer,
  StyledSelect,
  Label,
  StyledMenuItem
} from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SelectProps extends MuiSelectProps<string> {
  id: string;
  options: string[];
  noneOptionText?: string;
}


const Select: VoidFunctionComponent<SelectProps> = ({
  id,
  value,
  label,
  options,
  onChange,
  noneOptionText = 'Не важливо'
}) => {

  return (
    <SelectContainer>
      <FormControl fullWidth>
        <Label id={`${id}-label`}>{label}</Label>
        <StyledSelect
          fullWidth
          labelId={`${id}-label`}
          id={id}
          value={value}
          label={label}
          onChange={onChange}
          IconComponent={ExpandMoreIcon}
        >
          <StyledMenuItem key="None-select-item" value="">{noneOptionText}</StyledMenuItem>
          ${options.map((option, index) => (
            <StyledMenuItem key={option} value={option}>{option}</StyledMenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </SelectContainer>
  );
}

export default Select;