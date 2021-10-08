import styled from "styled-components";
import { Button } from '@typography';

export const BreadcrumbContainer = styled.article`
  display: flex;
  align-items: center;
`;

export const Crumb = styled(Button)<{ active: boolean; }>`
  color: ${props => props.theme.colors[props.active ? 'yellow-6' : 'yellow-5']};
  transition-duration: 300ms;
  cursor: ${props => props.active ? 'default' : null};

  :hover {
    color: ${props => props.theme.colors['yellow-6']};
  }
`;

export const Circle = styled.div`
  margin: 0 12px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors['yellow-5']};
`;