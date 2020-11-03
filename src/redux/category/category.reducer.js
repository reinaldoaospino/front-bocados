import CategoryActionTypes from "./category.types";

const INITIAL_STATE = {
  errorMessage: undefined,
  CategoryCollection: undefined,
  categoryFilter: undefined
};

const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_GET_CATEGORY_START:
      return {
        ...state, //TODO ver si se puede sacar.
      };
    case CategoryActionTypes.FETCH_GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryCollection: action.payload,
      };
    case CategoryActionTypes.FETCH_GET_CATEGORY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case CategoryActionTypes.SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.payload
      };
    default:
      return state;
  }
};

export default CategoryReducer;
