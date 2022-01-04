import styled from 'styled-components';
import { Menu, Button } from '@mui/material';
import colors from '@theme/colors';
import { lighten } from 'polished';

export const StyledMenu = styled(Menu)`
`;

export const StyledButton = styled(Button)`
  && {
    color: ${colors['brown-2']};

    :hover {
      background-color: ${(props) => lighten(0.8, props.theme.colors['brown-2'])};
    }

    text-transform: none;
  }
`;
