import ProductActionType from './product.types';

export const fetchGetProdutcStart = () => ({
    type: ProductActionType.FETCH_GET_PRODUCTS_START,
})

export const fetchGetProdutcSuccess = (productsCollection) => ({
    type: ProductActionType.FETCH_GET_PRODUCTS_SUCCESS,
    payload: productsCollection
})

export const fetchGetProdutcFailure = (errorMessage) => ({
    type: ProductActionType.FETCH_GET_PRODUCTS_FAILURE,
    payload: errorMessage
})
