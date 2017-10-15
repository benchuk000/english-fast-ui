import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton'

import * as authActions from '../../actions/auth';
import * as headerModalActions from '../../actions/headerModal';
import Header from '../../components/Header/Header';

class HeaderContainer extends Component {


  render() {
    const authButtons = [
      <RaisedButton 
        label="Войти" 
        onClick={() => this.props.openModal('SIGN_IN')} 
      />,
      <RaisedButton 
        style={{ marginLeft: '10px' }} 
        label="ЗАРЕГИСТРИРОВАТЬСЯ" 
        onClick={() => this.props.openModal('SIGN_UP')}
      />
    ];

    const userButtons = [
      <RaisedButton 
        label="Выйти" 
        onClick={() => this.props.logout()}
      />
    ];

    return (
      <Header>
        {this.props.isAuthorized ? userButtons : authButtons}
      </Header>
    )
  }
}

const masStateToProps = (state) => ({
  isAuthorized: !!state.auth.currentUser
});

const masDispatchToProps = (dispatch) => ({
  openModal: (selectedTab) => {
    dispatch(headerModalActions.setSelectedTab(selectedTab))
    dispatch(headerModalActions.openModal());
  },
  logout: () => dispatch(authActions.logout())
});

export default connect(masStateToProps, masDispatchToProps)(HeaderContainer);

