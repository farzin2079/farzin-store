import React from "react";
import styled from "styled-components";

import ProductCardSwiper from "../features/product/ProductCardSwiper";
import Container from "./Container";

const Section = styled.section`
  background-color: var(--color-rose-600);
`;

export default function OnSaleSection() {
  return (
    <Container>
      <Section>
        <ProductCardSwiper />
      </Section>
    </Container>
  );
}
