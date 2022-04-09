import styled from 'styled-components';
import {
    ITypographyStyles,
    TTypographyStyle,
    TTypographyComponent,
} from './types';
import {
    getStyles,
    getTypographyStyles
} from './utils';


const subtitleStyles: ITypographyStyles = {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: '140%',
}

const Subtitle: TTypographyComponent<"h3"> = styled.h3<TTypographyStyle>`
    ${props => getStyles(subtitleStyles, props)}
`;

Subtitle.getStyles = getTypographyStyles(subtitleStyles);


export default Subtitle;