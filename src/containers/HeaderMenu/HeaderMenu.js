import React, { Component } from 'react';

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
      />
    );
  }
}

export default HeaderMenuContainer;