import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './src/containers/app.jsx';

import todoListReducer from './src/reducers/todoListReducer';

const store = createStore(todoListReducer);

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('main')
);
