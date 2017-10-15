import React, { Component } from 'react';
import { connect } from 'react-redux';

import WelcomePage from '../../components/WelcomePage/WelcomePage';

class WelcomePageContainer extends Component {
  componentDidUpdate() {
    if (this.props.isUserLogined) {
      this.props.history.push('/');
    }
  }

  render() {
    return <WelcomePage/>
  }
}

const mapStateToProps = (state) => ({
  isUserLogined: !!state.auth.currentUser
});

export default connect(mapStateToProps)(WelcomePageContainer);