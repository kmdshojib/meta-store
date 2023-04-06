import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger";
import authSlice from "./feature/auth/authSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

const store  = configureStore({
    reducer : {
        auth:authSlice
    },
    middleware: (getDefalultMiddleware) => getDefalultMiddleware().concat(sagaMiddleware,logger)
})
sagaMiddleware.run(rootSaga)
export default store;