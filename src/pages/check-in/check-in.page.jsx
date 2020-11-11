import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckInComponent from "../../components/check-in/check-in.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

export const CheckInpage = ({cartItems}) => {
  return <CheckInComponent cartItems={cartItems}/>;
};


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CheckInpage);