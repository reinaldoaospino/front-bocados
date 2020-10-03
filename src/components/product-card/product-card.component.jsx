import React from "react";
import {
  ProductImageWrap,
  ProductImage,
  ImageWrap,
  DescriptionWrap,
  Price,
  OptionsWrap,
  Description,
  PriceWrap,
  ShopOptionWrap,
  ShopOptionText,
  ShopOptionIcon,
  ProductImg
} from "./product-card.styles";

import ShopIcon from "../shop-icon/shop-icon.component";

const ProductCard = ({ urlImage,ProducName }) => (
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
    <OptionsWrap>
      <ShopOptionWrap>
        <ShopOptionText>SHOP</ShopOptionText>
        <ShopOptionIcon>
          <ShopIcon color='white' />
        </ShopOptionIcon>
      </ShopOptionWrap>
    </OptionsWrap>
  </ProductImageWrap>
);

export default ProductCard;
