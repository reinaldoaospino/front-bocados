import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { CartDropDownContainer, EmpyMessage } from "./cart-dropdown.styles";
import { CartItems } from "../header/header.styles";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmpyMessage className="empty-message">You cart is empy</EmpyMessage>
      )}
    </CartItems>
    <CustomButton
      text="GO TO CHECKOUT"
      onClick={() => {
        history.push("/front-bocados/check-in");
        dispatch(toggleCartHidden());
      }}
      height="none"
    ></CustomButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
