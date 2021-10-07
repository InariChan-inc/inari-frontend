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


const helperStyles: ITypographyStyles = {
    fontFamily: 'montserrat',
    fontWeight: 'medium',
    fontSize: 12,
    letterSpacing: 0.36,
    lineHeight: '140%',
}

const Helper: TTypographyComponent<"span", TTypographyStyle> = styled.span<TTypographyStyle>`
    ${props => getStyles(helperStyles, props)}
`;

Helper.getStyles = getTypographyStyles(helperStyles);


export default Helper;