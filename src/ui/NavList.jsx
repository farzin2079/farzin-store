// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  HiArrowLeftOnRectangle,
  HiPencilSquare,
  HiUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useHamContext } from "../context/HamMenuContext";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  ${(props) =>
    props.$hamlist &&
    css`
      flex-direction: column;
      & li {
        flex-direction: row-reverse !important;
        gap: 8px;
        align-items: center;
      }
    `}
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1.5rem;
  & p {
    font-size: 0.75rem;
  }
`;

export default function NavList({isHamList = false}) {

  return (
    <Ul $hamlist={isHamList}>
      <List>
        <Link to={"/profile"}>
          <HiUser />
        </Link>
        <p>Profile</p>
      </List>
      <List>
        <Link to={"/login"}>
          <HiArrowLeftOnRectangle />
        </Link>
        <p>Login</p>
      </List>
      <List>
        <Link to={"/signup"}>
          <HiPencilSquare />
        </Link>
        <p>Signup</p>
      </List>
    </Ul>
  );
}
