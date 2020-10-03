import styled from "styled-components";

export const ProductContainer = styled.div``;

export const ProductImageWrap = styled.div`
  height: 300px;
  width: 253px;
  border: 1px solid #f0f0f0;
  padding: 20px;
  display: grid;
  grid-gap: 6px;
  position: relative;
`;

export const ProductImg = styled.img`
height: 100%;
width: 100%;
transform-origin: 0 0;
transition: transform .25s, visibility .25s ease-in;
${ProductImageWrap}: hover & {
  transform: scale(1.1);
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 202px;
  overflow: hidden;
`;

export const DescriptionWrap = styled.div`
  text-align: center;
`;

export const Description = styled.span`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Poppins", Arial, sans-serif;
`;

export const Price = styled.span`
  font-size: 1.1em;
  color: #82ae46;
  font-family: "Poppins", Arial, sans-serif;
  ${ProductImageWrap}: hover & {
    display: none;
  }
  
`;

export const PriceWrap = styled.div`
  text-align: center;
`;

export const OptionsWrap = styled.div``;

export const ShopOptionWrap = styled.div`
  background-color: #82ae46;
  border-radius: 10px;
  height: 25px;
  width: 46%;
  position: absolute;
  bottom: 6%;
  right: 25%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-items: center;
  display: none;

  ${ProductImageWrap}: hover & {
    display: grid;
  }
`;

export const ShopOptionText = styled.span`
  color: white;
  font-size: 17px;
  margin-top: 3px;
  justify-self: end;
`;

export const ShopOptionIcon = styled.div`
  margin-left: 34px;
  padding-top: 2px;
`;
