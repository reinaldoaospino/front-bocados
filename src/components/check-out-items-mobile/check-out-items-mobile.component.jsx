import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.action";
import {
  CheckItemsMobileWrap,
  ItemDetail,
  ItemDetailsWrap,
  ItemImgMobile,
  ItemMobileWrap,
} from "./check-out-items-mobile.styles";
import ClearIcon from "@material-ui/icons/Clear";
import UseCheckOutItems from "../check-out-items/logic/hooks/check-out-items.hook";
import Counter from "../counter-cart/counter-cart.component";

const CheckOutItemsMobileComponent = ({
  item,
  clearItemFromCart,
  addItem,
  removeItem,
}) => {
  const { productName, price, quantity, imagen } = item;
  const { increseClick, decreseClick, counter, addToCart } = UseCheckOutItems(
    quantity,
    item,
    addItem,
    removeItem
  );
  return (
    <CheckItemsMobileWrap>
      <ItemMobileWrap style={{ cursor: "pointer" }}>
        <ClearIcon onClick={() => clearItemFromCart(item)} />
      </ItemMobileWrap>
      <ItemMobileWrap>
        <ItemImgMobile src={"data:image/png;base64," + imagen} />
      </ItemMobileWrap>
      <ItemMobileWrap>
        <ItemDetailsWrap>
          <ItemDetail>{productName}</ItemDetail>
          <ItemDetail>{`$${price} X ${quantity} = $${
            price * quantity
          }`}</ItemDetail>
          <ItemDetail>Change quantity:</ItemDetail>
          <Counter
            counter={counter}
            sumHandler={increseClick}
            subHandler={decreseClick}
          />
        </ItemDetailsWrap>
      </ItemMobileWrap>
    </CheckItemsMobileWrap>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItemsMobileComponent);
