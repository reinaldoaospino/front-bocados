import styled from "styled-components";

export const BestProductsContainer = styled.div`
  display: grid;
  padding-top: 8em;
`;

export const TitleWrap = styled.div`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Title = styled.span`
  font-size: 2.5em;
  font-family: 'Cabin';
`;

export const ProductsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 40px;

  @media(max-width: 1023px){
    grid-template-columns: 1fr 1fr;  
    grid-gap: 20px;
  }
  @media(max-width: 655px){
    grid-template-columns: 1fr;  
  }
  
`;
