import styled from 'styled-components';
import { Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export const FilterTitleContainer = styled.div<{ noMargin?: boolean }>`
  display: flex;
  align-items: center;
  margin: ${({ noMargin }) => noMargin ? '0' : '20px 0 15px'};
`;

export const InformationIcon = styled(InfoIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors['brown-2']};
`;

export const StyledTooltip = styled(Tooltip)`
  margin-right: 8px;
`;