import styled from 'styled-components';
import { Helper } from '@typography';

export const Container = styled.div`
  position: relative;

  > a, > svg {
    cursor: pointer;
  }

  > svg {
    color: ${props => props.theme.colors['brown-2']};
    transition-duration: 300ms;
    position: relative;
    z-index: 60;
  }

  :hover > svg {
    color: ${props => props.theme.colors['brown-1']};
  }

  ::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    background-color: ${props => props.theme.colors['yellow-7']};
    z-index: 30;
    border-radius: 50%;
    transform: scale(0);
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    cursor: pointer;
  }

  :hover::before {
    transform: scale(1);
  }
`;

export const Tooltip = styled(Helper)<{ open: boolean }>`
  position: absolute;
  right: 50%;
  bottom: calc(100% + 12px + 4.5px + 2px);
  display: block;
  padding: 4px 8px;
  text-align: center;
  white-space: nowrap;
  background-color: ${props => props.theme.colors['brown-2']};
  color: white;
  border-radius: 10px;
  transform: translateX(50%);
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  opacity: ${({ open }) => open ? 1 : 0};
`;

export const Circle = styled.div`
  position: absolute;
  left: 50%;
  bottom: -9px;
  margin-left: -4.5px;
  width: 9px;
  height: 9px;
  background-color: ${props => props.theme.colors['brown-2']};
  clip-path: path('M0,0h10.5c0,0-1.7-0.1-2.6,1.5C6.9,3.1,5.3,3,5.3,3S3.6,3.1,2.7,1.5C1.8,0,0,0,0,0z');
`;