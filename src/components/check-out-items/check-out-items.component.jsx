import React from "react";
import {
  CheckInItemsWrap,
  ItemWrap,
  CustomSpan,
  ItemImg,
} from "./check-out-items.styles";
import ClearIcon from "@material-ui/icons/Clear";
import { addItem, clearItemFromCart } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckOutItemsComponent = ({ item, clearItemFromCart }) => {
  const { productName, price, quantity, imagen } = item;
  return (
    <CheckInItemsWrap>
      <ItemWrap style={{ cursor: "pointer" }}>
        <ClearIcon onClick={() => clearItemFromCart(item)} />
      </ItemWrap>
      <ItemWrap>
        <ItemImg src={"data:image/png;base64," + imagen} />
      </ItemWrap>
      <ItemWrap>
        <CustomSpan>{productName}</CustomSpan>
      </ItemWrap>
      <ItemWrap>{`$${price}`}</ItemWrap>
      <ItemWrap>{quantity}</ItemWrap>
      <ItemWrap>{`$${price * quantity}`}</ItemWrap>
    </CheckInItemsWrap>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItemsComponent);
