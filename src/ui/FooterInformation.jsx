import React from "react";
import styled from "styled-components";

const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 50px;
  padding: 12px 24px;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`;

const InfoHead = styled.div`
  font-weight: 700;
`;

const InfoP = styled.p``;

export default function FooterInformation() {
  return (
    <Information>
      <InfoColumn>
        <InfoHead>Let us Help you</InfoHead>
        <InfoP>Help</InfoP>
        <InfoP>Q&A</InfoP>
        <InfoP>Returns & Replacements</InfoP>
        <InfoP>Manage Your Content and Devices</InfoP>
        <InfoP>Contect Us</InfoP>
      </InfoColumn>

      <InfoColumn>
        <InfoHead>Be with Farzin store</InfoHead>
        <InfoP>Sell your product</InfoP>
        <InfoP>Buy in bulk</InfoP>
        <InfoP>Blog</InfoP>
        <InfoP>Suggestion</InfoP>
      </InfoColumn>
    </Information>
  );
}
