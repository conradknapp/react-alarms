import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import rootReducer from './reducers';
import './normalize.css';
import App from './containers/App';
import Report from './containers/Report';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const Root = () => (
  <Router>
    <Switch>
      <Route path="/report" component={Report} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
  <Root />
</Provider>, document.getElementById('root'));
registerServiceWorker();
