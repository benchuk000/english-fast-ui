import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userService from '../../services/userService';
import Profile from '../../components/Profile/Profile';

class ProfileContainer extends Component {
  state = {}

  componentDidMount() {
    userService.getUser(this.props.userId)
      .then(({ data }) => this.setState(data[0]))
      .catch(({ response }) => console.log(response.data));
  }

  render() {
    return (
      <Profile user={this.state}/>
    )
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.currentUser && state.auth.currentUser._id
});

export default connect(mapStateToProps)(ProfileContainer);