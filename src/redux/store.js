import { configureStore } from '@reduxjs/toolkit'
import hoangdat from "./counterSlice"
import createSagaMiddleware from '@redux-saga/core'
import counterSaga from './counterSaga'
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    counter:hoangdat
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(counterSaga)