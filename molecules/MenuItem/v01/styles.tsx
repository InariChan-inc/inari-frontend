import styled, { css } from "styled-components";
import { Button } from "@typography";

export const MenuItemContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: content-box;
  cursor: pointer;
  padding: 16px 0;
  text-align: center;
  white-space: pre-line;

  ${({isActive, theme: { colors }}) => isActive ? css`
      background-color: ${colors['yellow-7']};
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-color: ${colors['yellow-1']};

    ` : css`
      :hover {
        background-color: ${colors["yellow-7"]};
      }

      :hover > svg, :hover > ${Button} {
        color: ${colors['brown-1']};
      }

  `}

  > svg, > ${Button} {
    color: ${({isActive, theme: { colors }}) => colors[isActive ? 'brown-1' : 'brown-2']};
  }

  > ${Button} {
    margin-top: 8px;
  }

`;