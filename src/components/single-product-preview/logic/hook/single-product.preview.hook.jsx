import { useState } from "react";
import { increse, decrese } from "../functions/single-product.preview.function";

const UseSingleProductPreview = () => {
  const [counter, setCounter] = useState(1);

  const increseClick = () => {
    setCounter(increse(counter));
  };

  const decreseClick = () => {
    setCounter(decrese(counter));
  };

  const addToCart = (product, dispatch) => {
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

export default UseSingleProductPreview;
