// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Search from "./Search";
import Logo from "./Logo";
import NavList from "./NavList";
import HamMenu from "./HamMenu";
import CategoryList from "./CategoryList";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const NavGroup = styled.div`
  display: none;
  width: 100%;
  gap: 24px;
  align-items: center;

  @media screen and (min-width: 576px) {
    display: flex;
  }
`;

const NavBar = styled.nav`
  color: var(--color-stone-800);
  padding: 10px 16px 0 16px;
  border-bottom: 1px solid var(--color-stone-900);
`;

export default function Header() {
  return (
    <NavBar>
      <Nav>
        <Logo />
        <NavGroup>
          <Search />
          <NavList />
        </NavGroup>
        <HamMenu />
      </Nav>
      <CategoryList />
    </NavBar>
  );
}
