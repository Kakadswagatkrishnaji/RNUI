import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import productsReducer from './reducer/product';
import { all } from 'redux-saga/effects';
import watchFetchProducts from './sagas/product';

const rootReducer = combineReducers({
    products: productsReducer,
});

function* rootSaga() {
    yield all([watchFetchProducts()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;