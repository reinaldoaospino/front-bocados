import SubscriptionActionTypes from './subscription.types';

export const fetCreateSubscriptionStart = ()=>({
    type: SubscriptionActionTypes.FETCH_CREATE_SUBSCRIPTION_START
})

export const fetCreateSubscriptionFailure = (errorMessage)=>({
    type: SubscriptionActionTypes.FETCH_CREATE_SUBSCRIPTION_FAILURE,
    payload: errorMessage
})