import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import store from './store';
import App from './containers/app/App';
import Settings from './containers/settings/Settings';
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={App} />
            <Route path="/settings" component={Settings} />
        </Router>
    </Provider>, document.getElementById('root'));

