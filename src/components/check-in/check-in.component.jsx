import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CheckInItemsComponent from "../check-in-items/check-in-items.component";
import { CheckInContainer, Title } from "./check-in.styles";

const CheckInComponent = ({ cartItems }) => {
  return (
    <CheckInContainer>
      <Title>Your Cart</Title>
      {cartItems.map((c) => (
        <CheckInItemsComponent item={c} />
      ))}
    </CheckInContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckInComponent);
