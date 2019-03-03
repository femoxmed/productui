import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addProduct } from './actions/product';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addProduct({ description: 'Water bill', amount: 4500 }));
store.dispatch(addProduct({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addProduct({ description: 'Rent', amount: 109500 }));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
