import styled from "styled-components";
import { Body, Headline } from '@typography';

export const AnimeContainer = styled.div`
  padding: 30px 60px;
`;

export const AnimePoster = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 368px;
  background-color: #ccc;
  /* ${({ imageUrl }) => imageUrl && `background-image: url('${imageUrl.startsWith('http') ? imageUrl : process.env.INARIBEHOST + imageUrl.split(' ').join('%20')}');`} */
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
`;

export const RRateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ChipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -10px;
  margin-right: -10px;
  margin-bottom: 16px;

  > div {
    margin-top: 10px;

    :not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;

export const Title = styled(Headline)`
  margin-bottom: 16px;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors['brown-2']};

  > div {
    display: inline-block;
    ${Body.getStyles(1)}
  }
`;

export const ReadMoreButton = styled(Body)`
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
`;

export { default as RChip } from './RChip';
export { default as GenreChip } from './GenreChip';