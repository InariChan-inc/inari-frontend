import styled, { css } from "styled-components";
import { Button } from "@typography";

export type ButtonTypes = 1 | 2;

export const StyledButton = styled.button<{styleType: ButtonTypes; padding: string }>`
  display: flex;
  align-items: center;
  transition-duration: 300ms;
  cursor: pointer;
  padding: ${({ padding }) => padding};

  :disabled {
    cursor: not-allowed;
  }

  ${({
    styleType,
    theme: {
      colors,
 	    font,
      mq,
      pseudo,
    }
  }) => {
    switch(styleType) {
      case 1:
        return css`
          color: ${colors.white};
          border-radius: 40px;

          ${pseudo({
            backgroundColor: [colors["brown-2"], colors["brown-1"], colors["yellow-2"], null, null],
          })}

          :disabled {
            &, & > svg {
              color: ${colors["yellow-5"]};
            }
          }
        `;
      case 2:
        return css`
          color: ${colors['brown-2']};
          border-radius: 40px;

          ${pseudo({
            backgroundColor: [colors["yellow-1"], colors["yellow-2"], colors["yellow-2"], null, null],
          })}

          :disabled {
            &, & > svg {
              color: ${colors["yellow-5"]};
            }
          }
    		`;
    }
  }} 
`;


export const Text = styled(Button)<{isIcon: boolean}>`
  ${props => (props.isIcon ? 'padding-left: 8px' : '')}
`;