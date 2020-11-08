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

const SingleProductPreview = ({ product }) => {
  return (
    <SingleProductPreviewContainer>
      <ImgWrapped>
        <ProductImg src={`data:image/png;base64,${product.imagen}`} />
      </ImgWrapped>
      <DetailstWrapped>
        <ProductName>{product.productName}</ProductName>
        <ProductPrice>{`$${product.price}`}</ProductPrice>
        <ProductDetails>{product.description}</ProductDetails>
        <CounterWrapped>
          <Counter />
        </CounterWrapped>
        <ButtonWrapped>
          <CustomButton text="Add to Cart" />
        </ButtonWrapped>
      </DetailstWrapped>
    </SingleProductPreviewContainer>
  );
};

export default SingleProductPreview;
