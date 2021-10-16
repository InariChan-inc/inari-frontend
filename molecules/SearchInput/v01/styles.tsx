import { Caption } from '@typography';
import styled from "styled-components";


export const SearchInputContainer = styled.div`
  padding: 14px 0;
  width: 50%;
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 50px;
  background-color: ${props => props.theme.colors['yellow-1']};
  border-top-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  z-index: 9999;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  flex: 1 1 0%;
  outline: none;
  background-color: transparent;
  ${Caption.getStyles(1)}
  color: ${props => props.theme.colors['brown-2']};



  ::placeholder {
    color: ${props => props.theme.colors["yellow-6"]};
  }
`;