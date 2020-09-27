import React from "react";
import {
  ProductImageWrap,
  ProductImage,
  ImageWrap,
 DescriptionWrap,
 Price, OptionsWrap, Description, PriceWrap
} from "./product-card.styles";

import CustomButton from "../custom-button/custom-button.component";

const ProductCard = ({urlImage}) => (
  <ProductImageWrap>
    <ImageWrap>
      <ProductImage ImageUrl={urlImage} />
    </ImageWrap>
    <DescriptionWrap>
        <Description>Cookies</Description>
    </DescriptionWrap>
    <PriceWrap>
        <Price>$ 100</Price>
    </PriceWrap>
    <OptionsWrap>
        
    </OptionsWrap>
  </ProductImageWrap>
);

export default ProductCard;
