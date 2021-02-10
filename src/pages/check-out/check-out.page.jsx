import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutComponent from "../../components/check-out/check-out.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { CheckOutPageContainer, EmpyCartMessage } from "./check-out.styles";

export const CheckOutpage = ({ cartItems }) => {
  return (
    <CheckOutPageContainer>
      {cartItems.length > 0 ? (
        <CheckOutComponent cartItems={cartItems} />
      ) : (
        <EmpyCartMessage>Your cart is empy</EmpyCartMessage>
      )}
    </CheckOutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckOutpage);
