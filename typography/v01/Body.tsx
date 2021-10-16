import styled from 'styled-components';
import {
  ITypographyStyles,
  TTypographyComponent,
  TTypographyStyle,
} from './types';
import { getStyles, getTypographyStylesOf } from './utils';


export type TBodyTypes = 1 | 2 | 3 | 4 | 5 | 6;

const bodyStyles: Record<TBodyTypes, ITypographyStyles> = {
  1: {
    fontFamily: 'montserrat',
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1,
  },
  2: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: '140%',
  },
  3: {
    fontFamily: 'montserrat',
    fontWeight: 'regular',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: '130%',
  },
  4: {
    fontFamily: 'montserrat',
    fontWeight: 'semibold',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 1,
  },
  5: {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 1,
  },
  6: {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    italic: true,
    fontSize: 14,
    letterSpacing: 0.42,
    lineHeight: 1,
  },
};

const Body: TTypographyComponent<"p", TBodyTypes> = styled.p<TTypographyStyle<TBodyTypes>>`
  ${props => getStyles(bodyStyles[props.type], props)}
`;

Body.getStyles = getTypographyStylesOf(bodyStyles);


export default Body;