import styled from "styled-components";

export const ShopPageContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 62%;
  margin-bottom: 182px;
  @media (max-width: 916px) {
    max-width: 1000px;
    margin: auto;
    grid-template-columns: none;
    margin-bottom: 50px;
  }
`;

export const ProductsWrapped = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 40px;
  margin-top: 100px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  @media (max-width: 655px) {
    grid-template-columns: 1fr;
  }
`;

export const PaginationWrap = styled.div`
  margin: auto;
  display: flex;
  outline: 0;
  position: relative;
  justify-content: center;
  margin-bottom: 80px;
`;

export const NotProductMessage = styled.h1`
  margin-top: 150px;
  text-align: center;
  font-size: 2em;
  font-family: "Cabin";
  grid-column: span 3;
  font-weight: normal
`;
