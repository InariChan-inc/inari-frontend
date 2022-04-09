import { FC } from 'react';
import styled from "styled-components";
import {
  ITypographyStyles,
  TTypographyStyle,
  TTypographyComponent,
} from "./types";
import { getStyles, getTypographyStylesOf } from "./utils";


export type TLinkTypes = 1 | 2;

const linkStyles: Record<TLinkTypes, ITypographyStyles> = {
  1: {
    as: 'a',
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: '140%',
    underline: true,
  },
  2: {
    as: 'a',
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: '140%',
    underline: true,
  },
};

const Link: TTypographyComponent<'span', TLinkTypes>  = styled.span<TTypographyStyle<TLinkTypes>>`
  ${props => getStyles(linkStyles[props.type], props)}
`;

Link.getStyles = getTypographyStylesOf(linkStyles);

export default Link;