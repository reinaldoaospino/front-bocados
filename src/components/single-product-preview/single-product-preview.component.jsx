import React from "react";
import Counter from "../counter-cart/counter-cart.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  SingleProductPreviewContainer,
  ImgWrapped,
  DetailstWrapped,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductDetails,
  ButtonWrapped,
  CounterWrapped,
} from "./single-product-preview.styles";

const SingleProductPreview = ({ img }) => (
  <SingleProductPreviewContainer>
    <ImgWrapped>
      <ProductImg src={img} />
    </ImgWrapped>
    <DetailstWrapped>
      <ProductName>Chickpea cake</ProductName>
      <ProductPrice>$100</ProductPrice>
      <ProductDetails>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        accusamus consectetur omnis dolor odit, tenetur repudiandae nostrum
        magni molestias ducimus quo error officia dolore nulla eveniet soluta
        sed exercitationem in.
      </ProductDetails>
      <CounterWrapped>
        <Counter/>
      </CounterWrapped>
      <ButtonWrapped>
        <CustomButton text="Add to Cart" />
      </ButtonWrapped>
    </DetailstWrapped>
  </SingleProductPreviewContainer>
);

export default SingleProductPreview;
