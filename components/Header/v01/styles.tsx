import styled, { css } from "styled-components";


export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 132px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 60px;
  background-color: ${props => props.theme.colors.white};
  z-index: 5001;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1px;
    bottom: 0;
    width: 1px;
    background-color: ${props => props.theme.colors.white};
  }
`;

export const BlackScreen = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.black};
  transition-duration: 300ms;
  z-index: 9998;

  ${({ open }) => css`
    opacity: ${open ? 0.6 : 0};
    visibility: ${open ? 'visible' : 'hidden'};
  `}
`;