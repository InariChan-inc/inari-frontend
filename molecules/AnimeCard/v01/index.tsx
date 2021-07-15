import { FunctionComponent } from "react";

import {
  Subtitle,
  Body,
} from '../../../typography';

import {
  truncateByWords
} from '../../../utils/truncate';

export interface AnimeCardProps {
    title?: string,
    posterUrl?: string,
    availableSeriesAmount?: number,
    allSeriesAmount?: number,
}

const AnimeCard: FunctionComponent<AnimeCardProps> = ({
    title,
    posterUrl,
    availableSeriesAmount = 100,
    allSeriesAmount = 100,
}) => (
  <div className="w-[306px] pl-5 flex justify-end">
    <div className="relative cursor-pointer flex flex-col w-[285px] border-[1px] border-yellow-6 hover:border-brown-2 rounded-[3px] hover:shadow-anime-card">
      <div
        className="w-full h-[400px] bg-yellow-4" 
        style={{
          backgroundImage: posterUrl ? `url(${posterUrl})` : 'none',
        }}
      />
      <div className="flex-1 min-h-[90px] w-full px-8 py-5 flex justify-center text-center">
        <Subtitle>
          {truncateByWords(title || 'Уявімо, що тут дуже довгий заголовок, і він не вміщається, що будемо робити?', 7)}
        </Subtitle>
      </div>
      <div className="cursor-pointer p-2 rounded-sm bg-brown-2 text-white absolute top-[18px] -left-5">
      <Body type={3}>
        {availableSeriesAmount + '/' + allSeriesAmount}
      </Body>
    </div>
    </div>
  </div>
);


export default AnimeCard;
