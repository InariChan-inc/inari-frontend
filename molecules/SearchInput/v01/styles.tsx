import { Search } from "@atoms/icons";
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
  padding: 8px 44px;
  background-color: ${props => props.theme.colors['yellow-1']};
  border-top-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  z-index: 9999;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
`;

export const StyledSearchIcon = styled(Search)`
  margin-right: 12px;
  color: ${props => props.theme.colors['brown-2']};
  cursor: pointer;
`;

export const StyledInput = styled.input`
  flex: 1 1 0%;
  outline: none;
  background-color: transparent;
  font-family: ${props => props.theme.font.family.montserrat};
  font-weight: ${props => props.theme.font.weight.medium};
  font-style: italic;
  font-size: 14px;
  color: ${props => props.theme.colors['brown-2']};

  :placeholder-shown {
    font-weight: ${props => props.theme.font.weight.light};
  }

  ::placeholder {
    color: ${props => props.theme.colors["yellow-6"]};
  }
`;