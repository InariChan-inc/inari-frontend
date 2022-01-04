import styled from 'styled-components';
import {
  Button,
  IconButton,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
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

export const CloseIconWrapper = styled(IconButton)`
  && {
    color: ${(props) => props.theme.colors['brown-2']};
    padding: 6px;

    :hover {
      background-color: ${(props) => lighten(0.8, props.theme.colors['brown-2'])};
    }

    margin-left: 15px;
  }
`;