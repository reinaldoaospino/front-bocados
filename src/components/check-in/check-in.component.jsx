import React from "react";
import {
  CheckInContainer,
  Title,
  ItemWrap,
  ListProductsWrap,
} from "./check-in.styles";

const CheckInComponent = ({ cartItems }) => {
  return (
    <CheckInContainer>
      <Title>Selected Products</Title>
      <ListProductsWrap>
        <ItemWrap>*</ItemWrap>
        <ItemWrap>Foto</ItemWrap>
        <ItemWrap>BUDIN</ItemWrap>
        <ItemWrap>25$</ItemWrap>
        <ItemWrap>1</ItemWrap>
        <ItemWrap>25$</ItemWrap>
      </ListProductsWrap>
    </CheckInContainer>
  );
};

export default CheckInComponent;
