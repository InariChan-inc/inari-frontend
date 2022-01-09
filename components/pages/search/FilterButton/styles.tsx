import styled from 'styled-components';
import {
  Button,
  IconButton,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from 'polished';

export const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  && {
    color: ${(props) => props.theme.colors['brown-2']};

    :hover {
      background-color: ${(props) => lighten(0.8, props.theme.colors['brown-2'])};
    }

    text-transform: none;
  }
`;

export const FilterIcon = styled(FilterListIcon)`
  && {
    fill: ${(props) => props.theme.colors['yellow-6']};
    margin-left: 10px;
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  && {
    color: ${({ theme }) => theme.colors['brown-2']};
    margin-left: 10px;
  }
`;
