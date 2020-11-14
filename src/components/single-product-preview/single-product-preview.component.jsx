import React, { useState } from "react";
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
  const [counter, setCounter] = useState(1);
  const sumCounter = () => {
    setCounter(counter + 1);
  };

  const subCounter = () => {
    if (counter == 1) {
      return;
    }
    setCounter(counter - 1);
  };

  const addToCart = () => {
    if (counter > 1) {
      for (let index = 0; index < counter; index++) {
        addItem(product);
      }
    } else {
      addItem(product);
    }
  };

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
          <Counter
            counter={counter}
            sumHandler={sumCounter}
            subHandler={subCounter}
          />
        </CounterWrapped>
        <ButtonWrapped>
          <CustomButton text="Add to Cart" onClick={() => addToCart()} />
        </ButtonWrapped>
      </DetailstWrapped>
    </SingleProductPreviewContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SingleProductPreview);
