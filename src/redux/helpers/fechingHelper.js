    import { put } from 'redux-saga/effects';
import { setFetchingComplete, setFetchingSuccess, setIsFetching, setIsFetchingForm } from '../fetching/fetching.action';


export function* feching() {
    yield put(setIsFetching(true))
}

export function* fechingForm() {
    yield put(setIsFetchingForm(true))
}

export function* fechingFormComplete() {
    yield put(setFetchingSuccess(true));
    yield put(setFetchingComplete(true));
    yield put(setIsFetchingForm(false));
}

export function* fechingComplete() {
    yield put(setFetchingSuccess(false));
    yield put(setFetchingComplete(false));
    yield put(setIsFetching(false));
}

export function* fechingFailure() {
    yield put(setIsFetchingForm(false));
    yield put(setFetchingSuccess(false))
    yield put(setFetchingComplete(true));
}
