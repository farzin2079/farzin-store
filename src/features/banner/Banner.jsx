// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

import { useBanner } from "./useBanner";

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

const ThirdPlaceSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 30px;

  & img {
    border-radius: 15px;
    margin: auto;
  }

  @media screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const FourtSectionPlace = styled.div`
  @property --a {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }

  position: relative;
  width: 90%;
  height: 200px;
  margin: 0 auto;
  border-radius: 20px;
  animation: rotating 4s linear infinite;
  background: repeating-conic-gradient(
    from var(--a),
    #ff2770 0%,
    #ff2770 5%,
    transparent 5%,
    transparent 40%,
    #ff2770 50%
  );
  box-shadow: 0px 6px 30px var(--color-stone-500);
  &::after {
    content: "";
    position: absolute;
    inset: 7px;
    background-color: #2d2d39;
    border-radius: 15px;
    border: 8px solid #25252b;
  }

  @keyframes rotating {
    0% {
      --a: 0deg;
    }
    100% {
      --a: 360deg;
    }
  }
`;

const Box = styled.div`
  position: absolute;
  inset: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 10px 20px rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  transition: 0.5s;
  overflow: hidden;
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.$bg});
  background-position: center;
  background-size: cover;
`;

export default function Banner({ place }) {
  const { data, isLoading } = useBanner();

  let banners;

  if (isLoading) return;

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
      banners = data?.filter((b) => b.place === 3);
      return (
        <Container>
          <ThirdPlaceSection>
            {banners.map((banner) => (
              <Img src={banner.image} key={banner.id} />
            ))}
          </ThirdPlaceSection>
        </Container>
      );
    case "4":
      banners = data?.filter((b) => b.place === 4);
      console.log(banners);

      return (
        <Container>
          {banners?.map((banner) => (
            <FourtSectionPlace key={banner.id}>
              <Box>
                <ImageBox $bg={banner.image}>
                  {/* <Img src={banner.image} /> */}
                </ImageBox>
              </Box>
            </FourtSectionPlace>
          ))}
        </Container>
      );
    default:
      return <Img src={data.image} width="100%" />;
  }
}
