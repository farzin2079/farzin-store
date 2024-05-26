import React from "react";
import { HiChevronLeft } from "react-icons/hi2";
import styled from "styled-components";
import { useSwiper } from "swiper/react";

const Button = styled.button`
  background-color: var(--color-grey-100);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 20px;
  z-index: 100;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 1rem;
  border-radius: 50%;
  box-shadow: 0 0 10px 1px var(--color-slate-400);
`;

export default function SwiperPrevButton() {
  const swiper = useSwiper();
  return (
    <Button onClick={() => swiper.slidePrev()}>
      <HiChevronLeft />
    </Button>
  );
}
