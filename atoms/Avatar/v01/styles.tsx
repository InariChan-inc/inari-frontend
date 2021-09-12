import styled from "styled-components";
import { Body } from '@typography';

export const AvatarContainer = styled.div<{
    backgroundImage: string,
    backgroundColor: string,
}>`
   border-radius: 9999px;
   background-image: ${props => props.backgroundImage};
   background-color: ${props => props.backgroundColor};
   user-select: none;
`;

export const Abbreviation = styled(Body)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;