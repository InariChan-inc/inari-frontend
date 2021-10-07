import React from "react";
import {
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
    StyledComponent,
} from 'styled-components';
import { TStringOrNumber } from "@common/types";
import {
    TFontFamily,
    TFontWeight
} from "@theme/fonts";
import { TColors } from '@theme/colors';


export type TFacePaintScalarValue<T> = (T) | [(T) | null, (T) | null, (T) | null];

export interface ITypographyStyles {
    as?: React.ElementType,
    fontFamily: TFontFamily,
    fontWeight: TFontWeight,
    fontSize: TFacePaintScalarValue<TStringOrNumber>,
    lineHeight: TFacePaintScalarValue<TStringOrNumber>,
    letterSpacing: TFacePaintScalarValue<TStringOrNumber>,
    color?: TColors,
    italic?: boolean,
    underline?: boolean,
}

export type TTypedTypographyStyle<T> = TTypographyStyle & {
    type: T,
}

export type TTypographyStyle = Partial<ITypographyStyles>;

export type TTypographyComponent<
    TE extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    TS extends object
> = StyledComponent<TE, DefaultTheme, TS, never> & { getStyles?: (type?: TStringOrNumber) => FlattenInterpolation<ThemeProps<DefaultTheme>> };