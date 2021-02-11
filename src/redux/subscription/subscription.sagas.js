import { takeLatest, put, all, call } from 'redux-saga/effects';
import SubscriptionActionTypes from './subscription.types';
import { fetchCreateSubscriptionFailure } from './subscription.action'
import { fechingComplete, feching, fechingForm, fechingFormComplete } from '../helpers/fechingHelper';
import { CreateSubscription } from '../../services/subscription/subscription-service';

export function* fetchCreateSubscriptionAsync({payload}) {

    try {
        yield fechingForm();
        yield CreateSubscription(payload);
        yield fechingFormComplete();
    } catch (error) {
        yield put(fetchCreateSubscriptionFailure(error))
    }
}

export function* fetchCreateSubscriptionStart() {
    yield takeLatest(SubscriptionActionTypes.FETCH_CREATE_SUBSCRIPTION_START, fetchCreateSubscriptionAsync)
}


export function* subscriptionSagas() {
    yield all([call(fetchCreateSubscriptionStart)])
}