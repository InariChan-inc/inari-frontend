import { 
  FunctionComponent,
  useRef,
  CSSProperties,
} from "react";

import {
    Swiper,
    SwiperSlide,
} from 'swiper/react';

import {
  ArrowLeft,
  ArrowRight
} from '@icons';

import {
  SliderContainer,
  LeftControl,
  RightControl,
} from '../../styles';

import {
  Image,
  Pagination,
} from './styles';

interface ImageSliderProps {
    urls?: string[],
    style?: CSSProperties,
}

const ImageSlider: FunctionComponent<ImageSliderProps> = ({
    urls = [],
    style,
}) => {
  const nextElRef = useRef(null);
  const prevElRef = useRef(null);

  const paginationElRef = useRef(null); 

  return (
    <SliderContainer style={style}>
      <Swiper
        style={{
          width: '100%',
          height: 455,
        }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation={{
          nextEl: nextElRef.current,
          prevEl: prevElRef.current,
        }}
        pagination={{ 
          clickable: true, 
          el: paginationElRef.current,
        }}
        slidesPerView={1}   
        onBeforeInit={swiper => {
          //@ts-ignore
          swiper.params.navigation.nextEl = nextElRef.current;
          //@ts-ignore
          swiper.params.navigation.prevEl = prevElRef.current;
          //@ts-ignore
          swiper.params.pagination.el = paginationElRef.current;
        }}      
      >
        {urls.map((url, index) => (
          <SwiperSlide
            key={index}
            style={{
              borderRadius: 5,
              userSelect: 'none',
            }}
          >
            <Image url={url} />
          </SwiperSlide>
        ))}
        <RightControl ref={nextElRef}>
          <ArrowRight size={36} />
        </RightControl>
        <LeftControl ref={prevElRef}>
          <ArrowLeft size={36} />
        </LeftControl>
        <Pagination ref={paginationElRef} />
      </Swiper>
    </SliderContainer>
  );
};


export default ImageSlider;
