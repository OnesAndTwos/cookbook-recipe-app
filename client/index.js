import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';

import configureStore from './configureStore';
import configureEvents from './configureEvents';

import history from './getHistory';

const store = configureStore();
const events = configureEvents(store);

ReactDOM.render(<Root store={store} history={history} />, document.getElementById('root'));
