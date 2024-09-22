import React from "react";

import Banner from "../features/banner/Banner";
import OnSaleSection from "../ui/OnSaleSection";
import SuggestionSwction from "../ui/SuggestionSwction";
import BannerThird from "../features/banner/BannerThird";
import styled from "styled-components";

const HomeStyle = styled.div`
  & > div {
    margin: 40px 0;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <Banner place="2" />
      <OnSaleSection />
      <SuggestionSwction />
      <Banner place="3" />
    </HomeStyle>
  );
}
