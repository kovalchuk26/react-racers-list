import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {loadData} from './actions';
import Root from './components/Root';

const store = configureStore();

store.dispatch(loadData());

render(
    <Root store={store}/>,
    document.getElementById('app')
);

module.hot.accept();