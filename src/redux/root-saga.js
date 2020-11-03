import { all, call } from "redux-saga/effects";
import { productSagas } from './product/product.sagas';
import { categorySagas } from './category/category.sagas'


export default function* rootSaga() {
    yield all([call(productSagas), call(categorySagas)])
}