import React from "react";
import styled from "styled-components";

import { useBanner } from "./useBanner";
import Spinner from "../../ui/Spinner";
import Img from "../../ui/Img";

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 30px;

  @media screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export default function BannerThird() {
  const { data, isLoading } = useBanner();

  if (isLoading) return <Spinner />;

  return <div>here</div>;
}
