import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import './LoadingSpinner.css';

const LoadingSpinner = ({isShowing, ...props}) => isShowing && (
  <div className="grid-noGutter-column-middle-center loading-spinner-wrapper">
    <CircularProgress color="red" {...props}/>
  </div>
);

export default LoadingSpinner;