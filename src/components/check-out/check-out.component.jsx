import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CheckOutItemsComponent from "../check-out-items/check-out-items.component";
import {
  ButtonContainer,
  ButtonWrap,
  CheckInContainer as CheckOutContainer,
  Title,
} from "./check-out.styles";
import CustomButton from "../custom-button/custom-button.component";
import CheckOutItemsMobileComponent from '../check-out-items-mobile/check-out-items-mobile.component';

const CheckInComponent = ({ cartItems }) => {
  return (
    <CheckOutContainer>
      <Title>Your Cart</Title>
      {cartItems.map((c) => (
        <CheckOutItemsComponent key={c.id} item={c} />
      ))}
        {cartItems.map((c) => (
        <CheckOutItemsMobileComponent key={c.id} item={c} />
      ))}
      <ButtonContainer>
        <ButtonWrap>
          <CustomButton text="Pay Now" />
        </ButtonWrap>
      </ButtonContainer>
    </CheckOutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckInComponent);
