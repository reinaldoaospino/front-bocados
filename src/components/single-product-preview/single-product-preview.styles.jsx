import styled from "styled-components";

export const SingleProductPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;

  @media (max-width: 1050px) {
    margin: 0px 10px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapped = styled.div`
box-shadow: 10px 10px 5px -7px rgba(242,242,242,1);
border: 1px solid #f0f0f0;
  @media (max-width: 900px) {
    width: 64%;
    margin: auto;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  transform-origin: 0 0;
  transition: transform 0.25s, visibility 0.25s ease-in;
  @media (max-width: 1050px) {
    height: auto;
  }
`;

export const DetailstWrapped = styled.div`
display: grid;
grid-gap: 10px;
}
`;

export const ProductName = styled.h3`
  font-size: 30px;
  font-weight: 400;
`;

export const ProductPrice = styled.span`
  font-size: 30px;
`;

export const ProductDetails = styled.p`
  font-size: 15px;
  line-height: 1.8;
  font-weight: 400;
  color: gray;
`;

export const ButtonWrapped = styled.div``;

export const CounterWrapped = styled.div`
  width: 30%;
`;
