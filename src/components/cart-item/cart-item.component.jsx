import React from "react";
import {
  CartItemContainer,
  CartItemImg,
  CartItemDetails,
  CartItemName,
  CartItemPrice,
} from "./cart-item.styles";

const CartItem = ({ item: { imagen, price, productName, quantity } }) => (
  <CartItemContainer>
    <CartItemImg
      src={"data:image/png;base64," + imagen}
      alt="item"
    ></CartItemImg>
    <CartItemDetails>
      <CartItemName>{productName}</CartItemName>
      <CartItemPrice>
        {quantity} x ${price}
      </CartItemPrice>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;
