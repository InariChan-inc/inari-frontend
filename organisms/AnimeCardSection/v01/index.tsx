import { VoidFunctionComponent } from "react";
import { Headline } from '@typography';
import {
  AnimeCardSectionContainer,
  AnimeCardsWrapper
} from './styles';
import { AnimeCard, AnimeCardProps } from "@molecules";

export interface AnimeCardSectionProps {
  animes: AnimeCardProps[];
}

const AnimeCardSection: VoidFunctionComponent<AnimeCardSectionProps> = ({
  animes,
}) => (
  <AnimeCardSectionContainer>
    <Headline type={2}>Рекомендуємо подивитися</Headline>
    <AnimeCardsWrapper>
      {animes.slice(0, 5).map(anime => <AnimeCard key={anime.id} {...anime} />)}
    </AnimeCardsWrapper>
  </AnimeCardSectionContainer>
);


export default AnimeCardSection;