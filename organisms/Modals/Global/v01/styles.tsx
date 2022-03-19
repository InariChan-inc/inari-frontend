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

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 30px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  width: 60%;
  height: 500px;
  z-index: 5003;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  
  > button:first-child {
    margin-right: 20px;
  }
`;