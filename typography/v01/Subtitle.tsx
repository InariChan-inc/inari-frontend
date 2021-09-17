import styled from 'styled-components';
import { ITypographyStyles, TTypographyComponent } from './types';
import { getStyles } from './utils';


const subtitleStyles: ITypographyStyles = {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: '140%',
}

const Subtitle = styled.h3<TTypographyComponent>`
    ${props => getStyles(subtitleStyles, props)}
`;


export default Subtitle;