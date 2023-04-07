import { all } from "redux-saga/effects";
import signInWithEmailPassSaga from "./Sagas/authSaga";
import signInWithGoogleSaga from "./Sagas/signInwithGoogleSaga";

export default function* rootSaga(){
    yield all([
        signInWithEmailPassSaga(),
        // signInWithGoogleSaga()
    ])
}