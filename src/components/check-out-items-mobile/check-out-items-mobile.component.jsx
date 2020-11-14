import React from "react";
import { connect } from "react-redux";
import { addItem, clearItemFromCart } from "../../redux/cart/cart.action";
import {
  CheckItemsMobileWrap,
  ItemDetail,
  ItemDetailsWrap,
  ItemImgMobile,
  ItemMobileWrap,
} from "./check-out-items-mobile.styles";
import ClearIcon from "@material-ui/icons/Clear";

const CheckOutItemsMobileComponent = ({ item, clearItemFromCart }) => {
  const { productName, price, quantity, imagen } = item;
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
        </ItemDetailsWrap>
      </ItemMobileWrap>
    </CheckItemsMobileWrap>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItemsMobileComponent);
