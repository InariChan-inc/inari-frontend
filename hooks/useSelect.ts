import {
  useState,
} from 'react';
import { SelectChangeEvent } from '@mui/material';

type TSelectChangeEventHandler = (event: SelectChangeEvent) => void;

export default function useSelect(defaultValue?: string): [string, TSelectChangeEventHandler] {
  const [selectValue, setSelectValue] = useState<string>(defaultValue);

  const handleSelectChange: TSelectChangeEventHandler = (event) => {
    setSelectValue(event.target.value as string);
  };

  return [selectValue, handleSelectChange];
}