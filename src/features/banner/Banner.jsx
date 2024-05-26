// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

import { useBanner } from "./useBanner";

import Spinner from "../../ui/Spinner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import SwiperPrevButton from "../../ui/SwiperPrevButton";
import SwiperNextButton from "../../ui/SwiperNextButton";

const PicturePlace = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 100%;
  max-height: 400px;
  margin: auto;
`;

export default function Banner() {
  const { data, isLoading } = useBanner();

  if (isLoading) return <Spinner />;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      <SwiperPrevButton />
      {data?.map((banner) => (
        <SwiperSlide key={banner.id}>
          <PicturePlace>
            <img
              src={banner.image}
              alt={banner.description}
              width="100%"
              height="100%"
            />
          </PicturePlace>
        </SwiperSlide>
      ))}
      <SwiperNextButton />
    </Swiper>
  );
}
