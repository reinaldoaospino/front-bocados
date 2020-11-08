import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
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

const SingleProductPreview = ({ product, addItem }) => {
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
          <CustomButton text="Add to Cart" onClick={() => addItem(product)} />
        </ButtonWrapped>
      </DetailstWrapped>
    </SingleProductPreviewContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null,mapDispatchToProps)(SingleProductPreview);
