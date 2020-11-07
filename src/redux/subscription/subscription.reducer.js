import SubscriptionActionTypes from './subscription.types';

const INITIAL_STATE = {
    errorMessage: undefined,
};

const SubscriptionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SubscriptionActionTypes.FETCH_CREATE_SUBSCRIPTION_START: //TODO, ver si es posible sacar este case
            return {
                ...state
            };
        case SubscriptionActionTypes.FETCH_CREATE_SUBSCRIPTION_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default SubscriptionReducer;