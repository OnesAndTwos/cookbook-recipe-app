import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';

import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';

const store = configureStore();
const history = createBrowserHistory();

console.log(history);
console.log(store);

ReactDOM.render(<Root store={store} history={history} />, document.getElementById('root'));
