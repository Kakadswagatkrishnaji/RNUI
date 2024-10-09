import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_PRODUCTS_REQUEST, fetchProductsSuccess, fetchProductsFailure } from '../action/product';
import { fetchProducts } from '../../api/product';

function* fetchProductsSaga() {
    try {
        const response = yield call(fetchProducts);
        yield put(fetchProductsSuccess(response.data));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

export default function* watchFetchProducts() {
    yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}