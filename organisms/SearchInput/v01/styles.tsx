import { Caption } from '@typography';
import styled from "styled-components";


export const SearchInputContainer = styled.div`
  position: relative;
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

export const PropositionsContainer = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  padding: 53px 30px 30px 30px;
  width: 100%;
  height: 50vh;
  background-color: #fff;
  z-index: 9998;
  clip-path: polygon(0 38px, 100% 0, 100% 100%, 0% 100%);
`;

export const OfferedAnimesWrapper = styled.div`
  flex: 1;
  overflow: hidden auto;
  
  ::-webkit-scrollbar {
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 15px 0 15px 0;
  }

  ::-webkit-scrollbar-track {
    border-radius: 15px 0 15px 0;
  }
`;

export const AllResultsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;