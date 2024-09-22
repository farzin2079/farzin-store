import React, { cloneElement } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperPrevButton from "./SwiperPrevButton";
import SwiperNextButton from "./SwiperNextButton";

export default function SwiperComponent({ datas, children, ...props }) {
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
      {...props}
    >
      <SwiperPrevButton />
      {datas?.map((data) => (
        <SwiperSlide key={data.id}>
          {cloneElement(children, { data: data })}
        </SwiperSlide>
      ))}
      <SwiperNextButton />
    </Swiper>
  );
}
