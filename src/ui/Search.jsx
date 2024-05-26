import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import styled, { css } from "styled-components";

const SerachStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-slate-300);

  ${(props) =>
    props.$isfocused &&
    css`
      outline: none;
      box-shadow: 0px 0px 3px 2px var(--color-slate-300);
      border: none;
    `}
`;

const SearchButton = styled.button`
  text-align: center;
  border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
  padding: 7px 12px;
  min-height: 100%;
  border: none;
`;

const SearchInput = styled.input`
  padding: 6px 12px;
  border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
  width: 100%;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

export default function Search() {
  const [focused, setFocused] = useState(false);

  function handelFocuse(e) {
    if (e.type == "focus") {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }

  return (
    <SerachStyle $isfocused={focused}>
      <SearchInput onFocus={handelFocuse} onBlur={handelFocuse} />
      <SearchButton>
        <HiMagnifyingGlass />
      </SearchButton>
    </SerachStyle>
  );
}
