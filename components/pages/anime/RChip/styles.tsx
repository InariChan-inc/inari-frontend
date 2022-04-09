import styled from "styled-components";
import InfoIcon from '@mui/icons-material/InfoOutlined';

export const RChipContainer = styled.div<{ isAdult: boolean }>`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: ${({ isAdult, theme }) => theme.colors[isAdult ? 'brown-2' : 'yellow-4']};
  padding: 10px 20px;
  margin-right: 30px;
  height: 40px;
`;

export const StyledInfoIcon = styled(InfoIcon)`
  && {
    color: ${({ theme }) => theme.colors.white};
    margin-left: 14px;
  }
`;