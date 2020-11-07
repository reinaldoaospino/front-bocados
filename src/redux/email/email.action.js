import EmailActionTypes from './email.types';

export const fetchSendEmailStart = ()=>({
    type: EmailActionTypes.FETCH_SEND_EMAIL_START
})

export const fetchSendEmailFailure = (errorMessage)=>({
    type: EmailActionTypes.FETCH_SEND_EMAIL_FAILURE,
    payload: errorMessage
})