import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Router, browserHistory } from 'react-router';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <Router history={browserHistory}>
        <Route exact path="/" component={App} />
    </Router>

    , document.getElementById('root'));

serviceWorker.unregister();
