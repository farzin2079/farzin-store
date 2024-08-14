// eslint-disable-next-line no-unused-vars
import React from "react";
import styled, {css} from "styled-components";

import { useNavLink } from "../features/navLink/useNavLink";
import Menus from "./Menus";
import NavLink from "../features/navLink/NavLink";
import NavLinkPhone from "../features/navLink/NavLinkPhone";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  gap: 12px;
  width: 100%;

  ${(props) =>
    props.hamlist &&
    css`
      flex-direction: column;
      align-items: flex-end;
    `}
`;

export default function CategoryList({ isHamMenu }) {
  const { data, isLoading } = useNavLink();

  if (isHamMenu) {
    return (
      <Ul hamlist="true">
        {data?.map((category) => (
          <NavLinkPhone
            data={category}
            isLoading={isLoading}
            key={category.id}
          />
        ))}
      </Ul>
    );
  }

  return (
    <Menus>
      <Ul>
        {data?.map((category) => (
          <NavLink data={category} isLoading={isLoading} key={category.id} />
        ))}
      </Ul>
    </Menus>
  );
}
