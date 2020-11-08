import React from "react";
import {
  ProductImageWrap,
  ImageWrap,
  DescriptionWrap,
  Price,
  Description,
  PriceWrap,
  ProductImg,
  OptionsWrap,
  ShopOptionWrap,
} from "./product-card.styles";
import ShopIcon from "../shop-icon/shop-icon.component";
import CustomButton from "../custom-button/custom-button.component";

import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

const LinkStyles = {
  textDecoration: "none",
  color: "black",
};

const ProductCard = ({ id, urlImage, ProducName, price }) => (
  <Zoom>
    <Link to={`/front-bocados/product/${id}`} style={LinkStyles}>
      <ProductImageWrap>
        <ImageWrap>
          <ProductImg src={"data:image/png;base64," + urlImage} />
        </ImageWrap>
        <DescriptionWrap>
          <Description>{ProducName}</Description>
        </DescriptionWrap>
        <PriceWrap>
          <Price>{`$ ${price}`}</Price>
        </PriceWrap>
        <OptionsWrap>
          <ShopOptionWrap>
            <CustomButton text="shop" icon={<ShopIcon color="white" />} />
          </ShopOptionWrap>
        </OptionsWrap>
      </ProductImageWrap>
    </Link>
  </Zoom>
);

export default ProductCard;
