import { FunctionComponent } from "react";
import Ellipsis from 'react-lines-ellipsis';
import {
  AnimeFormat,
  Poster,
} from "@common/graphql/interfaces";
import { Link } from '@atoms';
import { Subtitle } from '@typography';
import { truncateByWords } from '@utils';
import {
  AnimeFormatLabel,
  AnimePoster,
  AnimeCardContainer,
  TitleWrapper,
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
  <Link href={`/anime/${id}`}>
    <AnimeCardContainer>
      <AnimePoster path={poster.path} />
      <TitleWrapper>
        <Ellipsis
          component="span"
          text={name} 
          ellipsis="..."
          maxLine="3"
          basedOn="letters"
        />
      </TitleWrapper>
      {
        format ? (
        <AnimeFormatLabel type={2}>
          {
            format === AnimeFormat.TV ? !!currentCountEpisodes && !!countEpisodes ? currentCountEpisodes + '/' + countEpisodes : !!currentCountEpisodes && currentCountEpisodes : format
          }
        </AnimeFormatLabel>
        ) : null
      }
    </AnimeCardContainer>
  </Link>
);


export default AnimeCard;
