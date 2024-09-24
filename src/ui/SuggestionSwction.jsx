import React from "react";

import { Pagination } from "swiper/modules";

import "swiper/css/pagination";

import SwiperComponent from "./SwiperComponent";
import Spinner from "./Spinner";
import { useProducts } from "../features/product/useProduct";
import Container from "./Container";
import Card from "./Card";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionName = styled.div`
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;

  & p {
    text-wrap: nowrap;
    margin: 0 16px;
  }
`;

const Button = styled(Link)`
  font-size: calc(0.7rem + 0.3vw);
  background: none;
  color: var(--color-blue-700);
  text-wrap: nowrap;
  margin: 0 16px;
`;

const LeftLine = styled.div`
  height: 1px;
  background: var(--color-stone-400);
  width: 100px;
`;

const RightLine = styled.div`
  height: 1px;
  background: var(--color-stone-400);
  width: 100%;
`;

export default function SuggestionSwction() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <Spinner />;
  return (
    <Container>
      <SectionName>
        <LeftLine />
        <p>For You</p>
        <RightLine />
        <Button>See more</Button>
      </SectionName>
      <SwiperComponent
        datas={data}
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        <Card />
      </SwiperComponent>
    </Container>
  );
}
