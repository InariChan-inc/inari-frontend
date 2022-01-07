import {
  useState,
} from 'react';
import { SelectChangeEvent } from '@mui/material';

type TSelectChangeEventHandler = (event: SelectChangeEvent) => void;

export default function useSelect(defaultValue?: string) {
  const [value, setValue] = useState<string>(defaultValue);

  const handleValueChange: TSelectChangeEventHandler = (event) => {
    setValue(event.target.value as string);
  };

  const handleValueClear = () => {
    setValue('');
  }

  return { 
    value, 
    handleValueChange,
    handleValueClear
  };
}