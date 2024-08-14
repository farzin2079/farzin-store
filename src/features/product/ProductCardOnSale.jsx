/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

const Card = styled.div`
  --bg-card: #27272a;
  --primary: #6d28d9;
  --primary-800: #4c1d95;
  --primary-shadow: #2e1065;
  --light: #d9d9d9;
  --zinc-800: #18181b;
  --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1rem;
  width: 14rem;
  background-color: var(--bg-card);

  border-radius: 1rem;
  margin-top: 40px;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  cursor: pointer;

  position: relative;
  z-index: 5;

  width: 100%;
  height: 8rem;
  background-color: var(--primary-800);

  border-radius: 0.5rem;

  & img {
    width: 100%;
    height: auto;
  }
`;

const Title = styled.div`
  overflow: clip;

  width: 100%;

  font-size: 1rem;
  font-weight: 600;
  color: var(--light);
  text-transform: capitalize;
  text-wrap: nowrap;
  text-overflow: ellipsis;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--light);
  display: flex;
  flex-direction: column;
`;

const CardButton = styled(Link)`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  width: 100%;
  background-image: var(--bg-linear);

  font-size: 0.75rem;
  font-weight: 500;
  color: var(--light);
  text-wrap: nowrap;

  border: 2px solid hsla(262, 83%, 58%, 0.5);
  border-radius: 0.5rem;
  box-shadow: inset 0 0 0.25rem 1px var(--light);
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

export default function ProductCardOnSale({ data }) {
  return (
    <Card>
      <ImageContainer>
        <img src={data.mainImage} alt={data.title} />
      </ImageContainer>
      <Title>
        <span>{data.title}</span>
      </Title>
      <Action>
        {data.discountPrecent ? (
          <Price>
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
          </Price>
        ) : (
          <Price>
            <span>{formatCurrency(data.regularPrice)}</span>
          </Price>
        )}

        <CardButton to={"#"}>
          <span>See Details</span>
        </CardButton>
      </Action>
    </Card>
  );
}
