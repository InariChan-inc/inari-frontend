import { ITypographyStyles } from "./types";
import theme from "@theme";

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

