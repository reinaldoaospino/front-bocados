import { takeLatest, put, all, call } from 'redux-saga/effects';
import EmailActionTypes from './email.types';
import { fetchSendEmailFailure } from './email.action'
import { fechingComplete, feching } from '../helpers/fechingHelper';
import {SendEmail} from '../../services/email/email-service';

export function* fetchSendEmailAsync() {

    try {
        yield put(feching());
        yield SendEmail();
        yield fechingComplete();
    } catch (error) {
        yield put(fetchSendEmailFailure(error))
    }
}

export function* fetchSendEmailStart() {
    yield takeLatest(EmailActionTypes.FETCH_SEND_EMAIL_START, fetchSendEmailAsync)
}


export function* sendEmailSagas() {
    yield call([call(fetchSendEmailStart)])
}