import { css } from 'styled-components';
import { ITypographyStyles } from "./types";
import theme from "@theme";
import { TStringOrNumber } from '@common/types';

export const getStyles = (defaultStyles: ITypographyStyles, customStyles: Partial<ITypographyStyles>) =>
    theme.mq({
        color: theme.colors[customStyles.color || defaultStyles.color] || null,
        fontFamily: theme.font.family[customStyles.fontFamily || defaultStyles.fontFamily],
        fontWeight: theme.font.weight[customStyles.fontWeight || defaultStyles.fontWeight],
        fontStyle: customStyles.italic !== undefined ? customStyles.italic ? 'italic' : null : defaultStyles.italic ? 'italic' : null,
        fontSize: customStyles.fontSize || defaultStyles.fontSize,
        letterSpacing: customStyles.letterSpacing || defaultStyles.letterSpacing,
        lineHeight: customStyles.lineHeight || defaultStyles.lineHeight,
        textDecoration: customStyles.underline !== undefined ? customStyles.underline ? 'underline' : null : defaultStyles.underline ? 'underline' : null,
    });

export const getTypographyStyles = (stylesObject: ITypographyStyles) => {
    const {
        as: _,
        italic,
        underline,
        color,
        ...styles
    } = stylesObject;

    return () => css`
        font-style: ${italic ? 'italic' : null};
        text-decoration: ${underline ? 'underline' : null};
        color: ${props => (color ? props.theme.colors[color] : null)};

        ${props => props.theme.mq(styles)}
    `;
}

export const getTypographyStylesOf = <T extends TStringOrNumber>(stylesObject: Record<T, ITypographyStyles>) => (type: T) => {
    const {
        as: _,
        italic,
        underline,
        color,
        ...styles
    } = stylesObject[type];

    return css`
        font-style: ${italic ? 'italic' : null};
        text-decoration: ${underline ? 'underline' : null};
        color: ${props => (color ? props.theme.colors[color] : null)};

        ${props => props.theme.mq(styles)}
    `;
}