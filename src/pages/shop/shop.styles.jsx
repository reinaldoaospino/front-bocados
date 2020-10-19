import styled from "styled-components";

export const ShopPageContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 62%;
  @media (max-width: 916px) {

    max-width: 1000px;
    margin: auto;
    grid-template-columns:none;

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



export const ImagenExample = styled.img`
  height: 300px;
  width:100%;
`;

