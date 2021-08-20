import { FunctionComponent } from "react";

import { Link } from '../../../atoms';

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

const AnimeCard: FunctionComponent<AnimeCardProps & {className? : string}> = ({
    id,
    name,
    poster,
    format,
    currentCountEpisodes,
    countEpisodes,
    className = ''
}) => (
  <Link
    href={`anime/${id}`}
    className={`w-[255px] h-[420px] pl-5 flex justify-end ${className}`}
  >
    <div className="relative cursor-pointer flex flex-col w-[240px] border border-yellow-6 hover:border-brown-2 rounded-[3px] hover:shadow-anime-card">
      <div
        className="w-full h-[340px] bg-cover bg-no-repeat" 
        style={{
          backgroundImage: `url(${process.env.INARIBEHOST}${poster.path.split(' ').join('%20')})`,
        }}
      />
      <div className="flex-1 max-h-[80px] w-full px-8 py-5 flex justify-center text-center">
        <Subtitle>
          {truncateByWords(name, 7)}
        </Subtitle>
      </div>
      {
        format ? (
        <div className="cursor-pointer p-2 rounded-sm bg-brown-2 text-white absolute top-[15px] left-[-15px]">
         <Body type={3}>
            {
              format === AnimeFormat.TV ? !!currentCountEpisodes && !!countEpisodes ? currentCountEpisodes + '/' + countEpisodes : !!currentCountEpisodes && currentCountEpisodes : format
            }
          </Body>
        </div>
        ) : null
      }
    </div>
  </Link>
);


export default AnimeCard;
