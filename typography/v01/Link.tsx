import { FC } from 'react';
import styled from "styled-components";
import {
  ITypographyStyles,
  TTypedTypographyComponent,
} from "./types";
import { getStyles } from "./utils";


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

const Link = styled.span<TTypedTypographyComponent<TLinkTypes>>`
  ${props => getStyles(linkStyles[props.type], props)}
`;

export default Link;