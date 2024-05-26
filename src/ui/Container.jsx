import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  @media screen and (min-width: 1400px) {
    width: 1320px;
  }
  /* Tablet screen */
  @media screen and (max-width: 992px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile screen */
  @media screen and (max-width: 576px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export default Container;
