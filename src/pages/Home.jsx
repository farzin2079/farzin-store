import React from "react";
import styled from "styled-components";

import Banner from "../features/banner/Banner";
import OnSaleSection from "../ui/OnSaleSection";
import { useProducts } from "../features/product/useProduct";
import Section from "../ui/Section";
import Spinner from "../ui/Spinner";

const HomeStyle = styled.div`
  & > div {
    margin: 40px 0;
  }
`;

export default function Home() {
  const { data, isLoading } = useProducts();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <HomeStyle>
          <Banner place="2" />
          <OnSaleSection />
          <Section data={data} sectionTitle={"For you"} />
          <Banner place="3" />
          <Section data={data} sectionTitle={"Most viewed"} />
          <Banner place="4" />
          <Section data={data} sectionTitle={"Best Sellers"} />
        </HomeStyle>
      )}
    </>
  );
}
