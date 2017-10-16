import React from 'react';
import ReduxToastr from 'react-redux-toastr';

import './App.css';
import Header from '../../containers/Header/Header';
import Main from '../Main/Main';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const App = ({ isLoading = false }) => isLoading 
  ? <LoadingSpinner isShowing={true} size={80} thickness={7}/>
  : (
    <div>
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
  );

export default App;