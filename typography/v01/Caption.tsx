import styled from 'styled-components';
import {
  ITypographyStyles,
  TTypographyStyle,
  TTypographyComponent,
} from './types';
import {
  getStyles,
  getTypographyStylesOf
} from './utils';


export type TCaptionTypes = 1 | 2;

const bodyStyles: Record<TCaptionTypes, ITypographyStyles> = {
  1: {
    fontFamily: 'montserrat',
    fontWeight: 'light',
    italic: true,
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 1,
  },
  2: {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    italic: true,
    fontSize: 16,
    letterSpacing: 0.48,
    lineHeight: 1,
  },
};

const Body: TTypographyComponent<"p", TCaptionTypes> = styled.p<TTypographyStyle<TCaptionTypes>>`
  ${props => getStyles(bodyStyles[props.type], props)}
`;

Body.getStyles = getTypographyStylesOf(bodyStyles);


export default Body;