import { takeLatest, put, all, call } from 'redux-saga/effects';
import { GetCategory } from '../../services/category/category.service';
import { feching, fechingComplete, fechingFailure } from '../helpers/fechingHelper';
import { fetchGetCategoryFailure, fetchGetCategorySuccess } from './category.action';
import CategoryActionTypes from './category.types';

export function* fetchGetCategoryAsync() {
    try {
        yield feching();
        var categories = yield GetCategory();
        yield put(fetchGetCategorySuccess(categories));
        yield fechingComplete();
    } catch (error) {
        yield put(fetchGetCategoryFailure(error))
        yield fechingFailure();
    }
}


export function* fetchGetCategoryStart() {
    yield takeLatest(CategoryActionTypes.FETCH_GET_CATEGORY_START, fetchGetCategoryAsync)
}

export function* categorySagas() {
    yield all([call(fetchGetCategoryStart)])
}
