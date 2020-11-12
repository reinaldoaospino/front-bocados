import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutComponent from "../../components/check-out/check-out.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

export const CheckOutpage = ({cartItems}) => {
  return <CheckOutComponent cartItems={cartItems}/>;
};


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CheckOutpage);