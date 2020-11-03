import ProductActionTypes from "./product.types";

const INITIAL_STATE = {
  errorMessage: undefined,
  productsCollection: undefined,
};

const ProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_GET_PRODUCTS_START: //TODO, ver si es posible sacar este case
      return {
        ...state,
      };
    case ProductActionTypes.FETCH_GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsCollection: action.payload,
      };
    case ProductActionTypes.FETCH_GET_PRODUCTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
