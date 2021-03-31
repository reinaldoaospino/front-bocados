import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/logo.png";
import "./stripe-button.styles.css";
import { clearCart } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { CreatePayment } from "../../services/stripe/stripe-service";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishhableKey =
    "pk_test_51Gue6sFrQWpIfAvdDpdnbEbI8REPFZRRf7nNtPjSYgghZ8ZRnHpglgDswELKyGBC2yN7nFNSxau2LNA7UHYdPzXq00prdr07Xn";

  const history = useHistory();



  const onToken = (token) => {
    console.log(token)
    const paymentoObject = {
      source: token.id,
      amount: priceForStripe,
    };

    CreatePayment(paymentoObject)
      .then((response) => {
        alert("Payment successful");
        clearCart();
        history.push("");
      })
      .catch((err) => {
        alert('Error');

        console.log(err)
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

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
