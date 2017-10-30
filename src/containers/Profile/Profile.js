import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userService from '../../services/userService';
import Profile from '../../components/Profile/Profile';

class ProfileContainer extends Component {
  state = {}

  componentDidMount() {
    userService.getUser(this.props.match.params.userId)
      .then(({ data }) => this.setState(data[0]))
      .catch(({ response }) => console.log(response.data));
  }

  render() {
    return (
      <Profile user={this.state}/>
    )
  }
}

export default ProfileContainer;