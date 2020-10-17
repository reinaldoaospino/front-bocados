import React from "react";
import {
  ProductImageWrap,
  ImageWrap,
  DescriptionWrap,
  Price,
  Description,
  PriceWrap,
  ProductImg
} from "./product-card.styles";
import Zoom from 'react-reveal/Zoom';

const ProductCard = ({ urlImage, ProducName }) => (
  <Zoom>

    <ProductImageWrap>
      <ImageWrap>
        <ProductImg src={urlImage} />
      </ImageWrap>
      <DescriptionWrap>
        <Description>{ProducName}</Description>
      </DescriptionWrap>
      <PriceWrap>
        <Price>$ 100</Price>
      </PriceWrap>
    </ProductImageWrap>
  </Zoom>
);

export default ProductCard;
