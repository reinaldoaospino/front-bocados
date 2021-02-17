import React from "react";
import {
  CheckInItemsWrap,
  ItemWrap,
  CustomSpan,
  ItemImg,
} from "./check-out-items.styles";
import ClearIcon from "@material-ui/icons/Clear";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import Counter from "../counter-cart/counter-cart.component";
import UseCheckOutItems from "./logic/hooks/check-out-items.hook";

const CheckOutItemsComponent = ({ item, clearItemFromCart, addItem,removeItem }) => {
  const { productName, price, quantity, imagen } = item;
  const { increseClick, decreseClick, counter, addToCart } = UseCheckOutItems(
    quantity,
    item,
    addItem,
    removeItem
  );
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
      <ItemWrap>
      <ItemWrap>
      <Counter
        counter={counter}
        sumHandler={increseClick}
        subHandler={decreseClick}
      />
      </ItemWrap>

      </ItemWrap>
      <ItemWrap>{`$${price * counter}`}</ItemWrap>
    </CheckInItemsWrap>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItemsComponent);
