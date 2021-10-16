import styled from "styled-components";
import {
  ITypographyStyles,
  TTypographyStyle,
  TTypographyComponent,
} from "./types";
import {
  getStyles,
  getTypographyStylesOf,
} from "./utils";


export type TButtonTypes = 1 | 2 | 3 | 4;

const buttonStyles: Record<TButtonTypes, ITypographyStyles> = {
  1: {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 1,
  },
  2: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 0.4,
    lineHeight: '130%',
  },
  3: {
    fontFamily: 'montserrat',
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 1,
  },
  4: {
    fontFamily: 'montserrat',
    fontWeight: 'semibold',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1,
  },
};

const Button: TTypographyComponent<"span", TButtonTypes> = styled.span<TTypographyStyle<TButtonTypes>>`
  ${props => getStyles(buttonStyles[props.type], props)}
`;

Button.getStyles = getTypographyStylesOf(buttonStyles);


export default Button;