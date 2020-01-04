import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Result from './pages/result/result.js';
import { Route, Router, browserHistory } from 'react-router';
import * as serviceWorker from './serviceWorker';
import "./standard-style/standard-style.css";

ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/result/:user" component={Result} />
    </Router>

    , document.getElementById('root'));

serviceWorker.unregister();
