/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Menus from "../../ui/Menus";
import SpinnerMini from "../../ui/SpinnerMini";

const List = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: calc(0.9rem + 0.3vw);

  & * {
    font-size: calc(0.9rem + 0.3vw);
  }
`;

export default function NavLink({ data, isLoading }) {
  if (isLoading) return <SpinnerMini />;

  return (
    <List key={data.id}>
      <Menus.toggle toggleId={data.id}>{data.name}</Menus.toggle>

      <Menus.list listId={data.id}>
        {data.childLink.map((child) => (
          <Menus.button key={child.id}>
            <Link to={`/category/${child.link}`}>{child.name}</Link>
          </Menus.button>
        ))}
      </Menus.list>
    </List>
  );
}
