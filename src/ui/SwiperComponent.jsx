import React, { cloneElement } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import SwiperPrevButton from "./SwiperPrevButton";
import SwiperNextButton from "./SwiperNextButton";

export default function SwiperComponent({ datas, children, ...props }) {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
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
