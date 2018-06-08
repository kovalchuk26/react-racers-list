import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import {initialState} from './constants/initialState';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();