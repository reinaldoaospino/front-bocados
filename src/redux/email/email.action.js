import EmailActionTypes from './email.types';

export const fetchSendEmailStart = (data)=>({
    type: EmailActionTypes.FETCH_SEND_EMAIL_START,
    payload: data
})

export const fetchSendEmailFailure = (errorMessage)=>({
    type: EmailActionTypes.FETCH_SEND_EMAIL_FAILURE,
    payload: errorMessage
})