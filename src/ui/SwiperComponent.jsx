import React, { cloneElement, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperPrevButton from "./SwiperPrevButton";
import SwiperNextButton from "./SwiperNextButton";

export default function SwiperComponent({ datas, children, ...props }) {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };


  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: "auto",
          centeredSlides: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSlideChange={handleSlideChange}
      {...props}
    >
      <SwiperPrevButton isFirstSlide={isFirstSlide} />
      {datas?.map((data) => (
        <SwiperSlide key={data.id}>
          {cloneElement(children, { data: data })}
        </SwiperSlide>
      ))}
      <SwiperNextButton isLastSlide={isLastSlide} />
    </Swiper>
  );
}
