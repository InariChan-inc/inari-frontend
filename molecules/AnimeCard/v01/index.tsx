import { FunctionComponent } from "react";
import {
  AnimeFormat,
  Poster,
} from "@common/graphql/interfaces";
import {
  Subtitle,
  Body,
} from '@typography';
import { truncateByWords } from '@utils';
import {
  AnimeCardLink,
  AnimeFormatLabel,
  AnimePoster,
  Container,
  Title,
} from './styles';


export interface AnimeCardProps {
  id: number,
  name: string,
  poster: Poster,
  format: AnimeFormat,
  currentCountEpisodes?: number,
  countEpisodes?: number,
}

const AnimeCard: FunctionComponent<AnimeCardProps> = ({
    id,
    name,
    poster,
    format,
    currentCountEpisodes,
    countEpisodes,
}) => (
  <AnimeCardLink href={`anime/${id}`}>
    <Container>
      <AnimePoster path={poster.path} />
      <Title>{truncateByWords(name, 7)}</Title>
      {
        format ? (
        <AnimeFormatLabel type={3}>
          {
            format === AnimeFormat.TV ? !!currentCountEpisodes && !!countEpisodes ? currentCountEpisodes + '/' + countEpisodes : !!currentCountEpisodes && currentCountEpisodes : format
          }
        </AnimeFormatLabel>
        ) : null
      }
    </Container>
  </AnimeCardLink>
);


export default AnimeCard;
