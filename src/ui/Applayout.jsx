/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "../features/banner/Banner";

const StyleApp = styled.div``;

const Main = styled.main`
  min-height: 80vh;
  overflow: auto;
`;

export default function Applayout() {
  return (
    <StyleApp>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyleApp>
  );
}
