import {
  VoidFunctionComponent,
  useRef
} from "react";
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

export interface ISelectOption {
  value: string;
  label: string;
}

interface SelectProps extends MuiSelectProps<ISelectOption> {
  id: string;
  options: ISelectOption[];
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
  const rootRef = useRef<HTMLDivElement>();

  return (
    <SelectContainer ref={rootRef}>
      <FormControl fullWidth>
        <Label id={`${id}-label`}>{label}</Label>
        <StyledSelect
          MenuProps={{
            PaperProps: {
              style: {
                width: `${rootRef.current?.getBoundingClientRect().width}px`,
                marginLeft: '28px'
              },
              onBlur: () => {
                setTimeout(() => {
                  (document.activeElement as HTMLInputElement).blur();
                }, 0);
              },
            }
          }}
          fullWidth
          labelId={`${id}-label`}      
          id={id}
          value={value}
          renderValue={({ label: l }) => l}
          label={label}
          onChange={onChange}
          IconComponent={ExpandMoreIcon}
        >
          <StyledMenuItem key="None-select-item" value={null}>{noneOptionText}</StyledMenuItem>
          ${options.map((option) => (
            <StyledMenuItem key={option.value} value={option as any}>{option.label}</StyledMenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </SelectContainer>
  );
}

export default Select;