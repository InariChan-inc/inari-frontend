import { 
  FunctionComponent,
  RefObject,
  useState,
  useRef,
} from "react";

import {
    Swiper,
    SwiperSlide,
} from 'swiper/react';

interface ImageSliderProps {
    className?: string,
}

const ImageSlider: FunctionComponent<ImageSliderProps> = ({
    className = '',
}) => {

  const nextEl = useRef(null);
  const prevEl = useRef(null);

  return (
    <>
      <Swiper 
        navigation={{
          nextEl: nextEl.current,
          prevEl: prevEl.current,
        }}
        pagination={{ clickable: true }}
        className={className}
        slidesPerView={1}   
        onBeforeInit={swiper => {
          //@ts-ignore
          swiper.params.navigation.nextEl = nextEl.current;
          //@ts-ignore
          swiper.params.navigation.prevEl = prevEl.current;
        }}      
      >
        <SwiperSlide className="flex justify-center items-center text-48">1</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-48">2</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-48">3</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-48">4</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-48">5</SwiperSlide>
        <div className="custom-navigation" style={{width: 100, height: 100, border: '3px solid #000', position: 'absolute', top: 0, right: 0, zIndex: 5000}} ref={nextEl}></div>
        <div className="custom-navigation" style={{width: 100, height: 100, border: '3px solid #000', position: 'absolute', top: 0, right: 100, zIndex: 5000}} ref={prevEl}></div>
      </Swiper>
      
    </>
  );
};


export default ImageSlider;
