// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

import { useNavLink } from "../features/navLink/useNavLink";
import Menus from "./Menus";
import NavLink from "../features/navLink/NavLink";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  gap: 12px;
  ${(props) =>
    props.$hamlist &&
    css`
      flex-direction: column;
    `}
`;



export default function CategoryList() {
  const { data, isLoading } = useNavLink();

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
