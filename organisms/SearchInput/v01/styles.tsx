import styled, { css } from "styled-components";
import { CircularProgress, circularProgressClasses } from "@mui/material";
import CallMissedRoundedIcon from '@mui/icons-material/CallMissedRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Subtitle,
  Caption,
  Link,
} from '@typography';


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

export const PropositionsContainer = styled.div<{$visible: boolean, isResult: boolean}>`
  visibility: ${({ $visible }) => $visible ? 'visible' : 'hidden'};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: 300ms ease;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  padding: 53px 30px 30px 30px;
  width: 100%;
  height: ${({ isResult }) => isResult ? '50vh' : 'unset'};
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

export const NoResultsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  > svg {
    min-width: 115px;
    min-height: 146px;
    margin-right: 20px;
  }
`;

export const NoResultsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoResultsBodyText = styled(Subtitle)`
  margin-top: 5px;
`;

export const PSText = styled(Subtitle)`
  margin-top: 16px;
`;

export const ControlsWrapper = styled.div`
  display: flex;
`;

const getIconCommonStyles = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  opacity: ${visible ? '1' : '0'};
  transition: 300ms ease;
`;

export const GoToSearchIcon = styled(CallMissedRoundedIcon)<{ visible: boolean }>`
  ${({ visible }) => getIconCommonStyles(visible)}
  color: ${({ theme }) => theme.colors['yellow-5']};
  transform: rotate(-45deg);
`;

export const CloseIcon = styled(CloseRoundedIcon)<{ visible: boolean }>`
  ${({ visible }) => getIconCommonStyles(visible)}
  color: ${({ theme }) => theme.colors['yellow-5']};
  margin: 0 12px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Loader = styled(CircularProgress)`
  &.${circularProgressClasses.root} {
    color: ${({ theme }) => theme.colors["yellow-4"]} !important;
  }
`;

export const GoToSearchLink = styled.span`
  ${Link.getStyles(2)}
  cursor: pointer;
`;