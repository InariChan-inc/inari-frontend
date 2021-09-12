import colors from "./colors";
import font from "./fonts";
import facepaint from 'facepaint';

const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
]);

const pseudo = facepaint([':hover', ':active', ':focus']);

const theme = {
    font,
    colors,
    mq,
    pseudo
};

export default theme;

export type ThemeType = typeof theme;