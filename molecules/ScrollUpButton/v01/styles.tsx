import styled, { css } from "styled-components";

export const CircleButton = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-top: 64px;
  margin-bottom: 32px;
  background-color: ${props => props.theme.colors['brown-2']};
  border-radius: 9999px;
  transition-property: opacity;
  transition-duration: 200ms;

  ${({isVisible}) => css`
    opacity: ${isVisible ? 1 : 0};
    cursor: ${isVisible ? 'pointer' : 'default'};
  `}
`;