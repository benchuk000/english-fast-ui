import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';

import 'gridlex/docs/gridlex.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import theme from 'react-quill/dist/quill.snow.css';

import './index.css';

import generateStore from './store/configureStore';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={generateStore()}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
