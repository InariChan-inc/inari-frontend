import styled from 'styled-components';
import {
  Chip,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@mui/material';
import ArrowIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {
  Button,
  Body
} from '@typography';

export const AutocompleteSelectContainer = styled.div`
`;

export const ChosenGenresWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 10px;
`;

export const ChosenGenre = styled(Chip)`
  &.MuiChip-root {
    ${Body.getStyles(6)}
    width: fit-content;
    height: unset;
    padding: 8.5px 15px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors['yellow-1']};

    .MuiChip-label {
      padding: 0 8px 0 0;
    }

    &, & svg {
      color: ${(props) => props.theme.colors['brown-2']};
    }

    & svg {
      margin-right: 0;

      :hover {
        color: ${(props) => props.theme.colors['brown-1']};
      }
    }

    :hover {
      background-color: ${(props) => props.theme.colors['yellow-2']};      
    }

    &:not(:last-of-type) {
      margin-bottom: 5px;
    }
  }
`;

export const Arrow = styled(ArrowIcon)` 
  color: ${(props) => props.theme.colors['yellow-6']};
  `;

export const Listbox = styled.ul<{ open: boolean }>`
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  width: 100%;
  margin: 2px 0 0;
  padding: 8px 0;
  position: absolute;
  z-index: 3;
  list-style: none;
  background-color: ${(props) => props.theme.colors.white};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  & li {
    ${Button.getStyles(3)}
    user-select: none;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors['yellow-1']};
    }

    padding: 10px 12px;
    display: flex;

    
    & span {
      flex-grow: 1;
    }
  }
  
  & li[aria-selected='true'] {
    background-color: ${'#fafafa'};
    font-weight: 600;
    
    & svg {
      color: #1890ff;
    }
  }
  
  & li[data-focus='true'] {
    background-color: ${'#e6f7ff'};
    cursor: pointer;
    
    & svg {
      color: currentColor;
    }
  }
  `;

export const InputRootWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;

  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'default'};
`;


export const Label = styled(InputLabel)<{ disabled?: boolean }>`
  &.MuiFormLabel-root {
    ${Button.getStyles(3)}

    color: ${({ disabled, theme }) => theme.colors[disabled ? 'brown-3' : 'brown-1']};
    
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

export const Input = styled(OutlinedInput)`
  &.MuiInputBase-root {
    height: 48px;
    border-radius: 50px;
    padding-right: 28px;
    
    .MuiInputBase-input {
      ${Button.getStyles(3)}
      padding-top: 12.5px;
      padding-bottom: 12.5px;
      padding-left: 28px;

      &.Mui-disabled {
        cursor: not-allowed;
      }
    }

    &,
    fieldset.MuiOutlinedInput-notchedOutline,
    &.Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.colors['yellow-3']};
      border-width: 1px;
    }


    &.Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors['yellow-4']};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors['yellow-6']};
    }

    &.Mui-disabled {
      cursor: not-allowed;

      fieldset.MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors['yellow-1']};
      }
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

export const NoOptionText = styled.span`
  ${Button.getStyles(3)}
  display: block;
  padding: 10px 12px;
`;