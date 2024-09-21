// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

import { useBanner } from "./useBanner";

import Spinner from "../../ui/Spinner";
import Container from "../../ui/Container";
import Img from "../../ui/Img";

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

export default function Banner({ place }) {
  const { data, isLoading } = useBanner();

  if (isLoading) return <Spinner />;

  let banners;

  switch (place) {
    case "1":
      banners = data?.filter((b) => b.place === 1);
      return (
        <>
          {banners.map((banner) => (
            <Container key={banner.id}>
              <Img
                src={banner.image}
                alt={banner.description}
                width="100%"
                height="1%"
              />
            </Container>
          ))}
        </>
      );
    case "2":
      banners = data?.filter((b) => b.place === 2);
      return (
        <Container>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            <SwiperPrevButton />
            {banners?.map((banner) => (
              <SwiperSlide key={banner.id}>
                <PicturePlace>
                  <Img
                    src={banner.image}
                    phoneSrc={banner.phoneImage}
                    alt={banner.description}
                    width="100%"
                    height="100%"
                  />
                </PicturePlace>
              </SwiperSlide>
            ))}
            <SwiperNextButton />
          </Swiper>
        </Container>
      );
      case "3":
        
    default:
      return <Img src={data.image} width="100%" />;
  }
}
