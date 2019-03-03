import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import productsReducer from '../reducers/product';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            products: productsReducer,

        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};