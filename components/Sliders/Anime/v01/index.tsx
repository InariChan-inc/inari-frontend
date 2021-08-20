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
        slidesPerView={'auto'}
        slidesPerColumn={slidesPerColumn}
        slidesPerColumnFill="row"
        spaceBetween={30}
        navigation={{
          nextEl: nextElRef.current,
          prevEl: prevElRef.current,
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
            <SwiperSlide className="pb-4" style={{ width: 'auto' }} key={index}>
              <AnimeCard {...anime}/>
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