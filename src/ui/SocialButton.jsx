import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  outline: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;

  & div {
    transform: translateY(0px);
    width: 100%;
  }

  &,
  & div {
    transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  & div span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 22px;
  }

  & div:nth-child(1) {
    background-color: ${(props) => props.firstbgcolor};
    color: ${(props) => props.firstcolor};
  }

  & div:nth-child(2) {
    background-color: ${(props) => props.secondbgcolor};
    color: ${(props) => props.secondcolor};
  }

  &:hover {
    box-shadow: 0 0.625em 1em 0 var(--color-stone-400);
  }

  &:hover div {
    transform: translateY(-50px);
  }
`;

export default function SocialButton({
  icon,
  firstBgColor,
  secondBgColor,
  firstColor,
  secondColor,
  to
}) {
  return (
    <Button
      firstcolor={firstColor}
      secondcolor={secondColor}
      firstbgcolor={firstBgColor}
      secondbgcolor={secondBgColor}
        target="blank"
      to={to}
    >
      <div>
        <span>{icon}</span>
      </div>
      <div>
        <span>{icon}</span>
      </div>
    </Button>
  );
}
