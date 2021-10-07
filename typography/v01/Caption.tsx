import styled from 'styled-components';
import {
  ITypographyStyles,
  TTypedTypographyStyle,
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

const Body: TTypographyComponent<"p", TTypedTypographyStyle<TCaptionTypes>> = styled.p<TTypedTypographyStyle<TCaptionTypes>>`
  ${props => getStyles(bodyStyles[props.type], props)}
`;

Body.getStyles = getTypographyStylesOf<TCaptionTypes>(bodyStyles);


export default Body;