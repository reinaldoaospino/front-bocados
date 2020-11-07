import EmailActionTypes from './email.types';

const INITIAL_STATE = {
    errorMessage: undefined,
};

const EmailReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EmailActionTypes.FETCH_SEND_EMAIL_START: //TODO, ver si es posible sacar este case
            return {
                ...state
            };
        case EmailActionTypes.FETCH_SEND_EMAIL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default EmailReducer;