import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/App/App';

const masStateToProps = (state) => ({
  isLoading: state.auth.isUserLoading
});

export default connect(masStateToProps)(App);

