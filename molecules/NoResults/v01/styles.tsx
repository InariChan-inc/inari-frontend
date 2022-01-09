import styled from "styled-components";
import {
  Headline,
  Body
} from '@typography';


export const NoResultsContainer = styled.div`
  display: flex; 
  align-items: center;
  user-select: none;
`;

export const TextWrapper = styled.div`
  margin-left: 30px;
`;

export const Title = styled(Headline)`
  margin-bottom: 10px;
`;

export const Message = styled(Body)`

`;

export const QueryText = styled(Body)`
  display: inline-block;
`;