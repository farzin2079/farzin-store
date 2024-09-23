import React from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa6";

import Container from "./Container";
import SocialGroup from "./SocialGroup";
import Button from "./Button";
import Img from "./Img";
import FooterInformation from "./FooterInformation";

const FooterStyle = styled.footer`
  border-top: 1px solid var(--color-stone-900);
  margin-top: 40px;
`;

const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;

  & img {
    display: none;
    @media screen and (min-width: 576px) {
      display: block;
    }
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 50px;
`;

const BottomFooter = styled.div`
  border-top: 1px solid var(--color-stone-500);
  padding: 6px;
  background-color: var(--color-grey-500);
  color: var(--color-grey-200);
  & p {
    font-size: small;
    margin: 0 12px;
  }
`;

export default function Footer() {
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <FooterStyle>
      <TopFooter>
        <LeftDiv>
          <Button onClick={goTop} size="small" width="100%">
            go to first <FaArrowUp />
          </Button>
          <SocialGroup />
        </LeftDiv>
        <Img
          src="/logo.png"
          alt="Farzin store Logo"
          width="30%"
          height="20%"
          aspect="3/2"
        />
      </TopFooter>
      <BottomFooter>
        <FooterInformation />
        <p>Create and designed by Farzin Abbasi - 2024</p>
      </BottomFooter>
    </FooterStyle>
  );
}
