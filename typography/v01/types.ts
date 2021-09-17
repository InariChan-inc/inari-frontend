import React from "react";
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

export type TTypedTypographyComponent<T> = TTypographyComponent & {
    type: T,
}

export type TTypographyComponent = Partial<ITypographyStyles>;