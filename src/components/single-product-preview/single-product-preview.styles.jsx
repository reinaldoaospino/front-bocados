import styled from "styled-components";

export const SingleProductPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
`;

export const ImgWrapped = styled.div`
`;
export const ProductImg = styled.img`
height: 100%;
width: 100%;
transform-origin: 0 0;
transition: transform .25s, visibility .25s ease-in;
`;

export const DetailstWrapped = styled.div`
`;


export const ProductName = styled.h3`
font-size: 30px;
font-weight: 400;
`

export const ProductPrice = styled.span`
font-size: 30px;
`

export const ProductDetails = styled.p`
font-size: 15px;
line-height: 1.8;
font-weight: 400;
color: gray;`;

export const ButtonWrapped = styled.div`
`