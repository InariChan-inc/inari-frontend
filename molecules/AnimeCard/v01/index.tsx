import { FunctionComponent } from "react";

import {
  AnimeFormat,
  Poster
} from "../../../common/graphql/interfaces";

import {
  Subtitle,
  Body,
} from '../../../typography';

import {
  truncateByWords
} from '../../../utils';


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
    countEpisodes
}) => (
  <div className="w-[306px] pl-5 flex justify-end">
    <div className="relative cursor-pointer flex flex-col w-[285px] border-[1px] border-yellow-6 hover:border-brown-2 rounded-[3px] hover:shadow-anime-card">
      <div
        className="w-full h-[400px] bg-cover bg-no-repeat" 
        style={{
          backgroundImage: `url(${process.env.INARIBEHOST}${poster.path.split(' ').join('%20')})`,
        }}
      />
      <div className="flex-1 min-h-[90px] w-full px-8 py-5 flex justify-center text-center">
        <Subtitle>
          {name}
        </Subtitle>
      </div>
      {
        !!currentCountEpisodes && !!countEpisodes ? (
        <div className="cursor-pointer p-2 rounded-sm bg-brown-2 text-white absolute top-[18px] -left-5">
         <Body type={3}>
            {
              !!currentCountEpisodes && !!countEpisodes ? currentCountEpisodes + '/' + countEpisodes : !!currentCountEpisodes && currentCountEpisodes
            }
          </Body>
        </div>
        ) : null
      }
    </div>
  </div>
);


export default AnimeCard;
