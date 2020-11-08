import { takeLatest, put, all, call } from 'redux-saga/effects';
import EmailActionTypes from './email.types';
import { fetchSendEmailFailure } from './email.action'
import { fechingFormComplete, fechingForm,fechingFailure } from '../helpers/fechingHelper';
import {SendEmail} from '../../services/email/email-service';

export function* fetchSendEmailAsync({payload}) {

    try {
        yield fechingForm();
        yield SendEmail(payload);
        yield fechingFormComplete();
    } catch (error) {
        yield put(fetchSendEmailFailure(error))
        yield fechingFailure();
    }
}

export function* fetchSendEmailStart() {
    yield takeLatest(EmailActionTypes.FETCH_SEND_EMAIL_START, fetchSendEmailAsync)
}


export function* sendEmailSagas() {
    yield all([call(fetchSendEmailStart)])
}