import styled from "styled-components";


export const Overlay = styled.div<{ open: boolean }>`
  display: ${props => props.open ? 'flex' : 'none'};

  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 5002;
  padding: 30px;
`;