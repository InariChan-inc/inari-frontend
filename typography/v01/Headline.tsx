import styled from "styled-components";
import { ITypographyStyles, TTypedTypographyComponent } from "./types";
import { getStyles } from "./utils";


export type THeadlineTypes = 1 | 2 | 3 | 4;

const headlineStyles: Record<THeadlineTypes, ITypographyStyles> = {
  1: {
    as: 'h1',
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 44,
    letterSpacing: 0,
    lineHeight: 1,
  },
  2: {
    as: 'h2',
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: 1,
  },
  3: {
    as: 'h3',
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 1,
  },
  4: {
    as: 'h4',
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 1,
  },
};


const Headline = styled.h1<TTypedTypographyComponent<THeadlineTypes>>`
  ${props => getStyles(headlineStyles[props.type], props)}
`;


export default Headline;