import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Logo from "../../assets/logo.png";
import "./stripe-button.styles.css";
import { clearCart } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishhableKey =
    "pk_test_51Gue6sFrQWpIfAvdDpdnbEbI8REPFZRRf7nNtPjSYgghZ8ZRnHpglgDswELKyGBC2yN7nFNSxau2LNA7UHYdPzXq00prdr07Xn";

  const history = useHistory();

  const onToken = (token) => {
    alert("Payment successful");
    clearCart();
    history.push("");
    // axios({
    //   url: "payment",
    //   method: "post",
    //   data: {
    //     amount: priceForStripe,
    //     token,
    //   },
    // })
    //   .then((response) => {
    //     console.log('exitoso')
    //     alert("Payment successful");
    //   })
    //   .catch((error) => {
    //     console.log("Payment error:", JSON.parse(error));
    //     alert("There was a issue with your payment. Check de credit cart.");
    //   });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Bodacos Nj"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishhableKey}
      className={"buttonstyle"}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
