import React from "react";
import {
  ProductImageWrap,
  ImageWrap,
  DescriptionWrap,
  Price,
  OptionsWrap,
  Description,
  PriceWrap,
  ShopOptionWrap,
  ProductImg
} from "./product-card.styles";

import ShopIcon from "../shop-icon/shop-icon.component";
import CustomButton from "../custom-button/custom-button.component";

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
        <CustomButton text='shop' icon={<ShopIcon color='white'/>}/>
      </ShopOptionWrap>
    </OptionsWrap>
  </ProductImageWrap>
);

export default ProductCard;
