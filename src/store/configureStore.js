import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as authActions from '../actions/auth';
import rootReducer from '../reducers/index';

const generateStore = (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  if (localStorage.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    store.dispatch(authActions.signInUserByToken(localStorage.token));
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default generateStore;