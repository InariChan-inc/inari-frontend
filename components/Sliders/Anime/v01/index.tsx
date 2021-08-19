import {
  FunctionComponent,
  useRef,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import {
  ArrowLeft,
  ArrowRight,
} from '../../../../atoms/icons';

import { AnimeCard, AnimeCardProps } from '../../../../molecules';

import { Headline } from '../../../../typography';


interface AnimeSliderProps {
  className?: string,
  title? : string,
  animes?: AnimeCardProps[],
  slidesPerColumn?: number 
}

const DEFAULT = 'relative pt-[68px] overflow-hidden ';

const AnimeSlider: FunctionComponent<AnimeSliderProps> = ({
  className = '',
  title,
  animes,
  slidesPerColumn = 1,
}) => {
  const nextElRef = useRef(null);
  const prevElRef = useRef(null);

  return (
    <div className={DEFAULT + className}>
      <Swiper
        className="w-full"
        navigation={{
          nextEl: nextElRef.current,
          prevEl: prevElRef.current,
        }}
        freeMode
        breakpoints={{
          "640": {
            slidesPerView: 1,
            spaceBetween: 32,
            slidesPerColumn,
            slidesPerColumnFill: "row",
          },
          "830": {
            slidesPerView: 2,
            spaceBetween: 32,
            slidesPerColumn,
            slidesPerColumnFill: "row",
          },
          "1150": {
            slidesPerView: 3,
            spaceBetween: 32,
            slidesPerColumn,
            slidesPerColumnFill: "row",
          },
          "1480": {
            slidesPerView: 4,
            spaceBetween: 32,
            slidesPerColumn,
            slidesPerColumnFill: "row",
          },
          "1770": {
            slidesPerView: 5,
            spaceBetween: 32,
            slidesPerColumn,
            slidesPerColumnFill: "row",
          }
        }}
        
        onBeforeInit={swiper => {
          //@ts-ignore
          swiper.params.navigation.nextEl = nextElRef.current;
          //@ts-ignore
          swiper.params.navigation.prevEl = prevElRef.current;
        }}      
      >
        {
          animes ? animes.map((anime, index) => (
            <SwiperSlide className="pb-4" key={index}>
              <AnimeCard key={anime.id} {...anime}/>
            </SwiperSlide>
          )) : null
        }
        <div className="cursor-pointer w-9 h-9 absolute top-[-68px] right-0 z-[1001]" ref={nextElRef}>
          <ArrowRight
            className="text-brown-2 fill-current"
            size={36}
          />
          
        </div>
        <div className="cursor-pointer w-9 h-9 absolute top-[-68px] right-[68px] z-[1001]" ref={prevElRef}>
          <ArrowLeft
            className="text-brown-2 fill-current"
            size={36}
          />
        </div>        
      </Swiper>
      {
        title ? (
          <div className="absolute top-0">
            <Headline type={2}>
              {title}
            </Headline>
          </div>
        ) : null
      }
    </div>
  );
}


export default AnimeSlider;