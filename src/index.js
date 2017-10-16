import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';

import 'gridlex/docs/gridlex.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import './index.css';

import generateStore from './store/configureStore';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <MuiThemeProvider>
    <Provider store={generateStore()}>
      <App />
    </Provider>
    </MuiThemeProvider>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
