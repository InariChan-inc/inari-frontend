import {
  useState,
} from 'react';
import { SelectChangeEvent } from '@mui/material';
import { ISelectOption } from '@molecules';

type TSelectChangeEventHandler = (event: SelectChangeEvent<ISelectOption>) => void;

export default function useSelect(defaultValue: ISelectOption = null) {
  const [value, setValue] = useState(defaultValue);
  const handleValueChange: TSelectChangeEventHandler = (event) => {
    setValue(event.target.value as ISelectOption);
  };

  const handleValueClear = () => {
    setValue(null);
    (document.activeElement as HTMLInputElement).blur();
  }

  return { 
    value, 
    handleValueChange,
    handleValueClear
  };
}