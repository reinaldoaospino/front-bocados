import { all, call } from "redux-saga/effects";
import { productSagas } from './product/product.sagas';
import { categorySagas } from './category/category.sagas';
import { subscriptionSagas } from './subscription/subscription.sagas';
import { sendEmailSagas } from './email/email.sagas';


export default function* rootSaga() {
    yield all([call(productSagas), call(categorySagas), call(subscriptionSagas), call(sendEmailSagas)])
}
