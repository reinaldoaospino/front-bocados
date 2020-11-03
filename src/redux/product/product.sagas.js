import { takeLatest, put, all, call } from 'redux-saga/effects';
import ProductActionTypes from './product.types';
import { fetchGetProdutcSuccess, fetchGetProdutcFailure } from './product.action'
import { GetProducts } from '../../services/product/product-service';
import { fechingComplete } from '../helpers/fechingHelper';
import { fetchGetCategorySuccess } from '../category/category.action';
import { GetCategory } from '../../services/category/category.service';

export function* fetchGetAsync() {

    try {
        var products = yield GetProducts();
        var categories = yield GetCategory();
        yield put(fetchGetCategorySuccess(categories));
        yield put(fetchGetProdutcSuccess(products));
        yield fechingComplete();
    } catch (error) {
        yield put(fetchGetProdutcFailure(error))
    }
}

export function* fetchGetStart() {
    yield takeLatest(ProductActionTypes.FETCH_GET_PRODUCTS_START, fetchGetAsync)
}

export function* productSagas() {
    yield all([call(fetchGetStart)])
}
