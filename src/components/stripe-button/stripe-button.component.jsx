import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Logo from "../../assets/logo.png";
import './stripe-button.styles.css'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishhableKey =
    "pk_test_51Gue6sFrQWpIfAvdDpdnbEbI8REPFZRRf7nNtPjSYgghZ8ZRnHpglgDswELKyGBC2yN7nFNSxau2LNA7UHYdPzXq00prdr07Xn";

  const onToken = (token) => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error:", JSON.parse(error));
        alert("There was a issue with your payment. Check de credit cart.");
      });
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

export default StripeCheckoutButton;
