import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import { useProducts } from "./useProduct";
import ProductCardOnSale from "./ProductCardOnSale";

export default function ProductCardSwiper() {
  const { data, isLoading } = useProducts();

  return (
    <Swiper
      modules={[EffectCards]}
      effect={"cards"}
      grabCursor={true}
      loop={true}
      className="card-swiper"
    >
      {data?.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCardOnSale data={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
