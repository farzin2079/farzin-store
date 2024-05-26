import React from "react";
import styled from "styled-components";
import ProductCardSwiper from "../features/product/ProductCardSwiper";

const Section = styled.section`
  background-color: var(--color-rose-600);
`;

export default function OnSaleSection() {
  return <Section><ProductCardSwiper /> </Section>;
}
