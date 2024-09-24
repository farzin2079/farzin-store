import React from "react";
import styled, { css } from "styled-components";

import Img from "./Img";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import StarRating from "./StarRating";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi2";

/* From Uiverse.io by eslam-hany */
const Book = styled.div`
  margin: 40px 0;
  border: 1px solid var(--color-stone-400);
  position: relative;
  border-radius: 10px;
  width: 100%;
  max-width: 380px;
  height: 300px;
  background-color: whitesmoke;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  flex-direction: column;

  &:hover div#cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-100deg);
    -ms-transform: rotatey(-100deg);
    transform: rotatey(-100deg);
  }
`;

const Cover = styled.div`
  top: 0;
  position: absolute;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  background-image: url(${(props) => props.$bg});
  background-position: center;
  background-size: cover;
`;

const DetailsWrapper = styled.div`
  margin: 16px;
`;

const Title = styled.h1`
  font-size: calc(0.8rem + 0.3vw);
  height: 50px;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--light);
  display: flex;
  flex-direction: column;
  height: 100px;
  overflow: hidden;
`;

const ReqularPrice = styled.span`
  text-decoration: line-through;
  color: red;
  font-size: 0.8rem;
`;

const DiscountPrecent = styled.span`
  background-color: red;
  color: #eee;
  font-size: 0.8rem;
  font-weight: 200;
  margin-left: 4px;
  padding-right: 2px;
`;

const Button = styled(Link)`
  font-size: calc(0.7rem + 0.3vw);
  background: none;
  color: var(--color-blue-700);
  text-align: end;
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  
`;

const StarsWrapper = styled.div``;
const Comment = styled.div`
  font-size: 1rem;
`;
export default function Card({ data }) {
  return (
    <Book>
      <DetailsWrapper>
        <Title>{data.title}</Title>
        <StarsWrapper>
          <StarRating size="15" />
        </StarsWrapper>
        <Comment>12 comments</Comment>
        <Price>
          {data.discountPrecent ? (
            <>
              <div>
                <ReqularPrice>{formatCurrency(data.regularPrice)}</ReqularPrice>
                <DiscountPrecent> {data.discountPrecent}% </DiscountPrecent>
              </div>
              <span>
                {formatCurrency(
                  data.regularPrice -
                    data.regularPrice * (data.discountPrecent / 100)
                )}
              </span>
            </>
          ) : (
            <span>{formatCurrency(data.regularPrice)}</span>
          )}
        </Price>
      </DetailsWrapper>
      <Button to={`/product/${data.id}`}>
        More details<HiChevronDoubleRight />
      </Button>
      <Cover $bg={data.mainImage} id="cover" />
    </Book>
  );
}
