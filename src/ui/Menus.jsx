import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import styled, { css } from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 12px;
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
  transition: all 0.2s;
  display: flex;
  align-items: center;

  ${(props) =>
    props.$isopen &&
    css`
      background-color: var(--color-slate-300);
    `};

  &:hover {
    background-color: var(--color-slate-400);
  }

  & svg {
    color: var(--color-grey-700);
    transform: rotate(0);
    transition: 0.5s;
    ${(props) =>
      props.$isopen &&
      css`
        transform: rotate(180deg);
      `};
  }
`;

const StyledList = styled.ul`
  position: fixed;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-100);
    box-shadow: 0 0 20px 7px var(--color-grey-200);
  }

  & svg {
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenuContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenuContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ children, toggleId }) {
  const { openId, open, close, setPosition } = useContext(MenuContext);

  function handeler(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    const windowSize = window.innerWidth;
    setPosition({
      x: windowSize * 0.05,
      y: rect.y + rect.height + 8,
    });
    openId === "" || openId !== toggleId ? open(toggleId) : close();
  }

  return (
    <StyledToggle onMouseEnter={handeler} $isopen={openId === toggleId}>
      {children}
      <HiChevronDown />
    </StyledToggle>
  );
}
function List({ children, listId }) {
  const { openId, position, close } = useContext(MenuContext);
  const ref = useOutsideClick(close, false);

  if (openId !== listId) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}
function Button({ children, icon, onClick, disabled = false }) {
  const { close } = useContext(MenuContext);

  function handelClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton disabled={disabled} onClick={handelClick}>
        {icon} <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.toggle = Toggle;
Menus.list = List;
Menus.button = Button;
Menus.menu = StyledMenu;

export default Menus;
