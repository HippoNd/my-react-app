import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

export const actions = {
    fetchProducts: () => {
        return {type:"USER_FETCH_REQUESTED"}
    },
    addProducts: (data) => {
        return {type:"USER_ADD_REQUESTED",payload:data}
    }
}


function* fetchProductsSaga() {
    const res = yield call(() => { return axios.get("http://localhost:5000/products") });
    yield put({ type: "counter/fetchProducts", payload: res.data });
}

function* addProductsSaga(action) {
    console.log("action",action)
    const res = yield call(() => { return axios.post("http://localhost:5000/products",action.payload) });
    yield put({ type: "counter/addProducts", payload: res.data });
}

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchProductsSaga);
    yield takeEvery("USER_ADD_REQUESTED", addProductsSaga);
}


export default mySaga  