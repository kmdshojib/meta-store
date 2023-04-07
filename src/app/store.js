import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger";
import authSlice from "./feature/auth/authSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware, loggerMiddleware);

const store  = configureStore({
    reducer : {
        auth:authSlice
    },
    middleware: middleware
})
sagaMiddleware.run(rootSaga)
export default store;