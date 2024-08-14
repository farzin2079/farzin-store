// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import Search from "./Search";
import NavList from "./NavList";
import styled from "styled-components";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";

import { useHamContext } from "../context/HamMenuContext";
import Button from "./Button";
import CategoryList from "./CategoryList";

const HamList = styled.div`
  display: flex;
  gap: 12px;
  justify-content: start;
  align-items: end;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100%;
  z-index: 1000;
  background-color: #fff;
  padding: 12px 12px;
  overflow-y: auto;
`;

const HamBackground = styled.div`
  display: ${(props) => (props.$isopen ? "flex" : "none")};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const HamButton = styled.button`
  display: none;
  background-color: inherit;
  border: none;
  font-size: 45px;

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

const LogoText = styled.div`
  border-top: 1px dashed var(--color-stone-600);
  padding: 8px 24px;
  margin-top: 40px;
`;

export default function HamMenu() {
  const { toggleHam, isOpen } = useHamContext();

  return (
    <>
      <HamButton onClick={toggleHam}>
        <HiBars3 />
      </HamButton>
      <HamBackground $isopen={isOpen}>
        <HamList>
          <Button onClick={toggleHam} size="small" variation="second">
            <HiMiniXMark />
          </Button>
          <Search />
          <NavList isHamList="true" />
          <hr width="100%" />
          <CategoryList isHamMenu="true" />
          <LogoText className="kanit-regular">Farzin Store</LogoText>
        </HamList>
      </HamBackground>
    </>
  );
}
