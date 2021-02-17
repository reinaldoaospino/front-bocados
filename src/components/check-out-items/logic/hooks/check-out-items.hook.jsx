import { useState } from "react";
import { increse, decrese } from "../functions/check-out-items.funtion";

const UseCheckOutItems = (quantity, product, addToCartDispatch, removeToCartDispatch) => {
  const [counter, setCounter] = useState(quantity);

  const increseClick = () => {
    setCounter(increse(counter));
    addToCartDispatch(product);
  };

  const decreseClick = () => {
    setCounter(decrese(counter));
    removeToCartDispatch(product);
  };

  const addToCart = (dispatch) => {
    if (counter > 1) {
      for (let index = 0; index < counter; index++) {
        dispatch(product);
      }
    } else {
      dispatch(product);
    }
  };

  return { increseClick, decreseClick, addToCart, counter };
};

export default UseCheckOutItems;
