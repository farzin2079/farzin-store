// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  height: 80px;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="logo2.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
