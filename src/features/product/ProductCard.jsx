import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 190px;
  height: 254px;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;

  &:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  &:hover button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

const CardDetails = styled.div`
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
`;

const CardButton = styled.button`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #008bf8;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
`;

const TextBody = styled.p`
  color: rgb(134, 134, 134);
`;

const TextTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;


export default function ProductCard() {
  return (
    <Card>
      <CardDetails>
        <TextTitle>Card title</TextTitle>
        <TextBody>Here are the details of the card</TextBody>
      </CardDetails>
      <CardButton className="card-button">More info</CardButton>
    </Card>
  );
}
