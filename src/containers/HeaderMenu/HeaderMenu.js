import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

class HeaderMenuContainer extends Component {
  state = {
    isOpen: false,
    anchorEl: null
  }

  render() {
    return (
      <HeaderMenu 
        isOpen={this.state.isOpen}
        anchorEl={this.state.anchorEl}
        handleTouchTap={(event) => this.setState({ isOpen: true, anchorEl: event.currentTarget })}
        handleRequestClose={() => this.setState({ isOpen: false})}
      >
        <MenuItem 
          primaryText="Profile"
          containerElement={<Link to={`/profile/${this.props.userId}`}/>}
        />
        <MenuItem 
          primaryText="Manage Users"
          containerElement={<Link to="/manage/users" />}
        />
        <MenuItem action="logout" primaryText="Sign out"/>
      </HeaderMenu>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.currentUser && state.auth.currentUser._id,
});

export default connect(mapStateToProps)(HeaderMenuContainer);