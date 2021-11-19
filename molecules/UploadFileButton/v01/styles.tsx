import styled from "styled-components";
import { Button  } from '@typography';

export const Label = styled.label<{ padding?: string }>`
	${Button.getStyles(1)}

  display: flex;
  align-items: center;
  transition-duration: 300ms;
  cursor: pointer;
	padding: ${props => props.padding ? props.padding : null};

  :disabled {
    cursor: not-allowed;
  }

	color: ${props => props.theme.colors.white};
	border-radius: 40px;

	${props => props.theme.pseudo({
		backgroundColor: [props.theme.colors["brown-2"], props.theme.colors["brown-1"], props.theme.colors["yellow-2"], null, null],
	})}

	:disabled {
		&, & > svg {
			color: ${props => props.theme.colors["yellow-5"]};
		}
	}
`;