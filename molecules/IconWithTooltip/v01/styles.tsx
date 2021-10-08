import styled from 'styled-components';
import { Helper } from '@typography';

export const Container = styled.div`
  position: relative;

  > a, > svg {
    cursor: pointer;
  }
`;

export const Tooltip = styled(Helper)<{ open: boolean }>`
  position: absolute;
  right: 50%;
  display: block;
  padding: 10px;
  text-align: center;
  background-color: ${props => props.theme.colors.black}7F;
  color: white;
  border-radius: 10px;
  transform: translateX(50%);
  transition-duration: 300ms;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  opacity: ${({ open }) => open ? 1 : 0};
`;