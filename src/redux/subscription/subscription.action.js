import SubscriptionActionTypes from './subscription.types';

export const fetchCreateSubscriptionStart = (data)=>({
    type: SubscriptionActionTypes.FETCH_CREATE_SUBSCRIPTION_START,
    payload: data
})

export const fetchCreateSubscriptionFailure = (errorMessage)=>({
    type: SubscriptionActionTypes.FETCH_CREATE_SUBSCRIPTION_FAILURE,
    payload: errorMessage
})