import styled from "styled-components";

export const ProductContainer = styled.div``;

export const ProductImageWrap = styled.div`
height: 300px;
width: 268px;
  border: 1px solid #f0f0f0;
  padding: 20px;
  display: grid;
  grid-gap: 6px;
`;

export const ProductImage = styled.div`
  background-image: url(${(props) => props.ImageUrl});
  height: 100%;
  background-size: cover;
  position: relative;
  background-position: center;
  border-radius: 16px;
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 237px;
`;

export const DescriptionWrap = styled.div`
  text-align: center;
  font-family: "Poppins", Arial, sans-serif;
  margin-bottom: 5px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;

`;

export const Description = styled.span`
font-size: 1.1em;
  color: black;
`;

export const Price = styled.span`
  font-size: 1.1em;
  color: #82ae46;
  font-family: "Poppins", Arial, sans-serif;
`;

export const PriceWrap = styled.div`
  text-align: center;
`;

export const OptionsWrap = styled.div``;
