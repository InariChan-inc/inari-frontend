import styled from 'styled-components';
import {
  ITypographyStyles,
  TTypedTypographyComponent,
} from './types';
import { getStyles } from './utils';


export type TBodyTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

const bodyStyles: Record<TBodyTypes, ITypographyStyles> = {
  1: {
    fontFamily: 'montserrat',
    fontWeight: 'regular',
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 1,
  },
  2: {
    fontFamily: 'montserrat',
    fontWeight: 'regular',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 1,
  },
  3: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1,
  },
  4: {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: '140%',
  },
  5: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: '140%',
  },
  6: {
    fontFamily: 'montserrat',
    fontWeight: 'semibold',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 1,
  },
  7: {
    fontFamily: 'montserrat',
    fontWeight: 'light',
    italic: true,
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 1,
  },
  8: {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 1,
  },
  9: {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    italic: true,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 1,
  },
  10: {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    italic: true,
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1,
  },
  11: {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: '140%',
  },
};

const Body = styled.p<TTypedTypographyComponent<TBodyTypes>>`
  ${props => getStyles(bodyStyles[props.type], props)}
`;


export default Body;