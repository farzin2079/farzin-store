/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SpinnerMini from "../../ui/SpinnerMini";

const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: calc(0.9rem + 0.3vw);

  & * {
    font-size: calc(1rem + 0.3vw);
    margin-top: 2px;
  }
`;

const ListHead = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid var(--color-stone-400);
  padding: 0 4px 0px 32px;
`;

export default function NavLink({ data, isLoading }) {
  if (isLoading) return <SpinnerMini />;

  return (
    <List key={data.id}>
      <ListHead>{data.name}</ListHead>
      {data.childLink.map((child) => (
        <Link to={`/category/${child.link}`} key={child.id}>
          {child.name}
        </Link>
      ))}
    </List>
  );
}
