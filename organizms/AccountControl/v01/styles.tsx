import styled, { css } from "styled-components";
import {
  Avatar,
  Link,
} from "@atoms";

export const AccountControlContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ControlsWrapper = styled.div<{ open: boolean }>`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 300px;
  height: 100%;
  padding: 0 24px;
  margin-right: 32px;
  cursor: pointer;
  border-right-width: 1px;
  border-left-width: 1px;

  ${({open, theme: { colors }}) => open ? css`
    border-color: ${colors['yellow-1']};
    background-color: ${colors['yellow-7']};
  ` : css`
    border-color: transparent;
  `}

  :hover {
    background-color: ${props => props.theme.colors["yellow-7"]};
    border-color: ${props => props.theme.colors["yellow-1"]};
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 16px;
`;

export const StyledAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
  margin-left: 16px;
  margin-right: 8px;
`;

export const AccountMenu = styled.div<{ open: boolean }>`
  display: ${props => props.open ? 'block' : 'none'};
  position: absolute;
  bottom: 0;
  right: -1px;
  min-width: 300px;
  border-width: 1px;
  border-color: ${props => props.theme.colors['yellow-1']};
  border-style: solid;
  background-color: ${props => props.theme.colors.white};
  transform: translateY(100%);
`;

export const MenuLink = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  :not(:first-of-type) {
    border-top-width: 1px;
  }

  :not(:last-of-type) {
    border-bottom-width: 1px;
  }

  border-color: transparent;

  :hover {
    background-color: ${props => props.theme.colors['yellow-7']};
    border-color: ${props => props.theme.colors['yellow-1']};
  }
`;