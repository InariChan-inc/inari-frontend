import styled from "styled-components";


export const AuthorizationContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SignUpButton = styled.button`
  margin-left: -36px;
  background-color: ${props => props.theme.colors["yellow-1"]};
  transition-duration: 300ms;
  padding: 10px 20px 10px 52px; 
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

  :hover {
    background-color: ${props => props.theme.colors["yellow-2"]};
  }
`;