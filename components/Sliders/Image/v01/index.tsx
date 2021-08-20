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
  ArrowRight
} from '../../../../atoms/icons';

import tailwind from '../../../../tailwind.config';

interface ImageSliderProps {
    className?: string,
    urls?: string[],
}

const DEFAULT = 'pt-[68px] overflow-hidden ';

const ImageSlider: FunctionComponent<ImageSliderProps> = ({
    className = '',
    urls = [],
}) => {
  const nextElRef = useRef(null);
  const prevElRef = useRef(null);

  const paginationElRef = useRef(null); 

  return (
    <div className={DEFAULT + className}>
      <Swiper
        className="w-full h-[455px]"
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
            className="rounded-[5px] select-none" 
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-[5px]"
              style={{
                backgroundImage: `url('${process.env.INARIBEHOST}${url}')`
              }}
            />
          </SwiperSlide>
        ))}
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
        <div className="absolute left-0 top-[-59px] h-[18px] z-[1000]" ref={paginationElRef} />
        <style jsx global>{`
            .swiper-button-disabled {
              cursor: default;
            }

            .swiper-button-disabled > svg {
              fill: ${tailwind.theme.colors.yellow[2]};
            }

            .swiper-container {
              overflow: visible;
            }

            .swiper-pagination-bullet {
              width: 15px;
              height: 15px;
              background-color: transparent;
              border: 3px solid ${tailwind.theme.colors.yellow[1]};
              opacity: 1;
            }

            .swiper-pagination-bullet-active {
              background-color: ${tailwind.theme.colors.yellow[1]};
            }

            .swiper-pagination-clickable > .swiper-pagination-bullet-active {
              cursor: default;
            }

          `}</style>
      </Swiper>
    </div>
  );
};


export default ImageSlider;
