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
} from '@icons';

import {
  AnimeCard,
  AnimeCardProps 
} from '@molecules';
import { Headline } from '@typography';
import {
  AnimeContainer,
  LeftControl,
  RightControl,
  Title,
} from './styles';


interface AnimeSliderProps {
  title? : string,
  animes?: AnimeCardProps[],
  slidesPerColumn?: number,
  style?: React.CSSProperties,
}

const AnimeSlider: FunctionComponent<AnimeSliderProps> = ({
  title,
  animes,
  slidesPerColumn = 1,
  style,
}) => {
  const nextElRef = useRef(null);
  const prevElRef = useRef(null);

  return (
    <AnimeContainer style={style}>
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
            <SwiperSlide
              key={index}
              style={{
                width: 'auto',
                paddingBottom: 16
              }}
            >
              <AnimeCard {...anime}/>
            </SwiperSlide>
          )) : null
        }
        <LeftControl ref={nextElRef}>
          <ArrowRight size={36} />
        </LeftControl>
        <RightControl ref={prevElRef}>
          <ArrowLeft size={36} />
        </RightControl>        
      </Swiper>
      {
        title ? (
          <Title type={2}>
            {title}
          </Title>
        ) : null
      }
    </AnimeContainer>
  );
}


export default AnimeSlider;