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

export type TTypographyStyle<T extends string | number | void = void> = Partial<ITypographyStyles> & {
    type: T;
};

export type TTypographyComponent<
    TE extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    TT extends string | number | void = void
> = StyledComponent<TE, DefaultTheme, TTypographyStyle<TT>, never> & { getStyles?:  (type: TT extends void ? void : TT) => FlattenInterpolation<ThemeProps<DefaultTheme>> };