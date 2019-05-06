import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import App from './App';
import Settings from './components/settings/Settings';
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

const routing =(
    <Router history={history}>
        <Route exact path="/" component={App} />
        <Route path="/settings/" component={Settings} />
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
