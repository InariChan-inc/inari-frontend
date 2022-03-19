import styled from 'styled-components';
import { Body } from '@typography';

export const AnimeRowContainer = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;

  :not(:last-of-type) {
    margin-bottom: 15px;
  }
  height: 165px;
`;

export const Image = styled.div<{ path: string }>`
  flex: 0 0 115px;
  border-radius: 3px;
  background-image: url('${({ path }) => path.startsWith('http') || path.startsWith('/_next') ? path : process.env.INARIBEHOST + path.split(' ').join('%20')}');
  background-size: cover;
`;

export const DataWrapper = styled.div`
  padding: 10px 15px;
`;

export const TitleWrapper = styled.div`
  ${Body.getStyles(2)}
  color: ${({ theme }) => theme.colors['brown-2']};
`;

export const CounterWrapper = styled.div`
  ${Body.getStyles(4)}
  display: flex;
  margin-top: 5px;
`;

export const Counter = styled(Body)`
  margin-left: 8px;
`;

export const Description = styled(Body)`
  margin-top: 5px;
`;