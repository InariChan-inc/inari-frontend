import {
  VoidFunctionComponent,
  useEffect
} from "react";
import {
  useAutocomplete,
  UseAutocompleteProps,
  FormControl,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AutocompleteSelectContainer,
  InputRootWrapper,
  Input,
  Label,
  ChosenGenresWrapper,
  Listbox,
  ChosenGenre,
  NoOptionText
} from './styles';

const useAutocompleteWrapper = ((props: UseAutocompleteProps<string, true, undefined, undefined>) => useAutocomplete(props));


interface AutocompleteSelectProps extends ReturnType<typeof useAutocompleteWrapper> {
  label: string;
  disabled?: boolean;
  noOptionsText?: string;
}

const AutocompleteSelect = ({
  id,
  label,
  disabled,
  getRootProps,
  getInputLabelProps,
  getInputProps,
  getTagProps,
  getListboxProps,
  getOptionProps,
  groupedOptions,
  value,
  inputValue,
  focused,
  popupOpen,
  anchorEl,
  setAnchorEl,
  noOptionsText = 'Опції відсутні'
}: AutocompleteSelectProps) => {

  console.log('GROUPED OPTIONS LENGTH', groupedOptions);

  const getOptions = () => {
    const filteredOptions = groupedOptions.map((option, index) => ({ option, index })).filter(({ option }) => !value.includes(option));

    if (filteredOptions.length) {
      return filteredOptions.map(({option, index}) => (
        <li {...getOptionProps({ option, index })}>
          <span>{option}</span>
        </li>
      ))
    }

    return <NoOptionText>{noOptionsText}</NoOptionText>;
  };

  console.log(anchorEl);

  useEffect(() => {
    console.log('DISABLED', disabled);
    if (disabled) {
      const labelEl = anchorEl.querySelector('label');

      labelEl.classList.remove('Mui-focused');
    }
  }, [disabled]);

  return (
    <AutocompleteSelectContainer>
      <InputRootWrapper {...getRootProps()} disabled={disabled}>
        <FormControl
          ref={setAnchorEl}
          fullWidth
        >
          <Label
            {...getInputLabelProps()}
            htmlFor={`${id}-input`}
            disabled={disabled}
          >
            {label}
          </Label>
          <Input
            disabled={disabled}
            id={`${id}-input`}
            label={label}
            inputProps={getInputProps()}
            endAdornment={popupOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            value={inputValue}
          />
        </FormControl>
        <Listbox {...getListboxProps()} open={popupOpen}>
          {getOptions()}
        </Listbox>
      </InputRootWrapper>
      
      {value.length ? (
        <ChosenGenresWrapper>
          {value.map((option, index) => (
            <ChosenGenre
              {...getTagProps({ index })}
              label={option}
              deleteIcon={<CloseIcon />}
            />
          ))}
        </ChosenGenresWrapper>
      ) : null}
      
    </AutocompleteSelectContainer>
  );
};


export default AutocompleteSelect;