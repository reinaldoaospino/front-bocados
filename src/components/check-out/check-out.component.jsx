import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CheckOutItemsComponent from "../check-in-items/check-out-items.component";
import { CheckInContainer as CheckOutContainer, Title } from "./check-out.styles";

const CheckInComponent = ({ cartItems }) => {
  return (
    <CheckOutContainer>
      <Title>Your Cart</Title>
      {cartItems.map((c) => (
        <CheckOutItemsComponent item={c} />
      ))}
    </CheckOutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckInComponent);
