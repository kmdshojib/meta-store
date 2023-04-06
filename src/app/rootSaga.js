import { all } from "redux-saga/effects";
import signInWithEmailPassSaga from "./Sagas/authSaga";

export default function* rootSaga(){
    yield all([
        signInWithEmailPassSaga()
    ])
}