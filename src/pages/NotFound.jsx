import React from "react";
import styled from "styled-components";

import Container from "../ui/Container";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div``;

const Image = styled.img`
  max-width: 40vw;
`;

const Text = styled.p`
  font-size: calc(1.7rem + 0.5vw);
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 24px 44px;
  border: 4px solid;
  border-color: transparent;
  font-size: 16px;
  background-color: var(--color-brand-600);
  border-radius: 100px;
  font-weight: 600;
  color: var(--color-brand-50);
  box-shadow: 0 0 0 2px #ffffff;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  margin: 30px auto;

  & svg {
    position: absolute;
    width: 24px;
    fill: var(--color-brand-50);
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    transform: rotate(-180deg);
  }

  & .arr-1 {
    left: 22px;
  }

  & .arr-2 {
    right: -25%;
  }

  & .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: var(--color-brand-50);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  & .text {
    position: relative;
    z-index: 1;
    transform: translateX(12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
  }

  &:hover .arr-1 {
    left: -25px;
  }

  &:hover .arr-2 {
    right: 25px;
  }

  &:hover .text {
    transform: translateX(-12px);
  }

  &:hover svg {
    fill: #212121;
  }

  &:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
  }

  &:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }
`;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Image src="/notFound.png" />
        <Text>
          Most pages are under <b>construction</b>
        </Text>
        <Button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arr-1"
            viewBox="0 0 24 24"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Go Back</span>
          <span className="circle"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arr-2"
            viewBox="0 0 24 24"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </Button>
      </Wrapper>
    </Container>
  );
}
