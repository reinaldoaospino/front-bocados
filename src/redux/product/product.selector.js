import { createSelector } from 'reselect';


const selectProduct = state => state.product;


export const selectProductCollection = createSelector(
    [selectProduct],
    product => product.productsCollection
)

export const selectProductById = (idProduct) => createSelector(
    [selectProductCollection],
    products => products ? products.find(p => p.id === idProduct) : null

)