import styled from 'styled-components';
import { Select, InputLabel, MenuItem } from '@mui/material';
import { Button } from '@typography';

export const SelectContainer = styled.div`
  position: relative;
`;

export const StyledSelect = styled(Select)`
  &.MuiInputBase-root {
    height: 48px;
    border-radius: 50px;
    padding-right: 28px;
    
    .MuiInputBase-input {
      ${Button.getStyles(3)}
      padding-top: 12.5px;
      padding-bottom: 12.5px;
    }

    &,
    fieldset.MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.colors['yellow-3']};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.colors['yellow-6']};
    }

    &.Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.colors['yellow-4']};
      border-width: 1px;
    }



    .MuiSelect-select {
      display: flex;
      align-items: center;
      padding-left: 28px;
    }

    .MuiSelect-icon, .MuiSelect-iconOpen {
      position: static;
      color: ${({ theme }) => theme.colors['brown-2']};
    }

    fieldset.MuiOutlinedInput-notchedOutline {  
      legend {
        display: block;
        margin-left: 14px;
        span {
          padding-left: 10px;
        }
      }
    }
  }
`;

export const Label = styled(InputLabel)`
  &.MuiFormLabel-root {
    ${Button.getStyles(3)}
    color: ${(props) => props.theme.colors['brown-1']};
    
    &.Mui-focused {
      color: ${(props) => props.theme.colors['brown-1']};
    }
    
    &[data-shrink='false'] {
      transform: translate(28px, 18px) scale(1);
    }
    
    &[data-shrink='true'] {
      transform: translate(28px, -5px) scale(0.75);
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    ${Button.getStyles(3)}
    
    padding: 10px 12px;

    :hover {
      background-color: ${({ theme }) => theme.colors['yellow-1']};
    }

    &.Mui-selected {
      background-color: ${({ theme }) => theme.colors['brown-3']};

      :hover {
        background-color: ${({ theme }) => theme.colors['brown-1']};
      }
    }
  }
`;