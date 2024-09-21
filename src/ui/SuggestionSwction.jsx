import React from "react";

import { Pagination } from "swiper/modules";

import "swiper/css/pagination";

import SwiperComponent from "./SwiperComponent";
import Spinner from "./Spinner";
import { useProducts } from "../features/product/useProduct";
import Container from "./Container";
import Card from "./Card";

export default function SuggestionSwction() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <Spinner />;
  return (
    <Container>
      <SwiperComponent
        datas={data}
        slidesPerView={4}
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
      >
      <Card />
      </SwiperComponent>
    </Container>
  );
}
