import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';

import './App.css';
import Header from '../../containers/Header/Header';
import Main from '../Main/Main';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const App = ({ isLoading = false }) => isLoading
  ? <LoadingSpinner isShowing={isLoading}/>
  : (
    <Router>
      <div className="app">
        <Header/>
        <Main/>
        <ReduxToastr
          timeOut={2000}
          newestOnTop={true}
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </div>
    </Router>
  );

export default App;