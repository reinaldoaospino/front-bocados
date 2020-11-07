import { takeLatest, put, all, call } from 'redux-saga/effects';
import SubscriptionActionTypes from './subscription.types';
import { fetCreateSubscriptionFailure } from './subscription.action'
import { fechingComplete, feching } from '../helpers/fechingHelper';
import { CreateSubscription } from '../../services/subscription/subscription-service';

export function* fetchCreateSubscriptionAsync() {

    try {
        yield put(feching());
        yield CreateSubscription();
        yield fechingComplete();
    } catch (error) {
        yield put(fetCreateSubscriptionFailure(error))
    }
}

export function* fetchCreateSubscriptionStart() {
    yield takeLatest(SubscriptionActionTypes.FETCH_CREATE_SUBSCRIPTION_START, fetchCreateSubscriptionAsync)
}


export function* subscriptionSagas() {
    yield all([call(fetchCreateSubscriptionStart)])
}