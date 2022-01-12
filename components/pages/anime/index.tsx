import styled from "styled-components";


export const AnimeContainer = styled.div`
  padding: 30px 60px;
`;

export const AnimePoster = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 100%;
  background-color: #ccc;
  /* ${({ imageUrl }) => imageUrl && `background-image: url('${imageUrl.startsWith('http') ? imageUrl : process.env.INARIBEHOST + imageUrl.split(' ').join('%20')}');`} */
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
`;

export const AnimeDataWrapper = styled.div`
  display: flex;
`;


export const ChipsWrapper = styled.div`
  display: flex;
`;

export { default as RChip } from './RChip';
export { default as GenreChip } from './GenreChip';