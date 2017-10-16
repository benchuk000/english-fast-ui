import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const HeaderMenu = ({ isOpen, anchorEl, handleTouchTap, handleRequestClose, handleItemTouchTap }) => (
  <div>
    <RaisedButton
      onClick={handleTouchTap}
      label="Click me"
    />
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      onRequestClose={handleRequestClose}
    >
      <Menu onItemTouchTap={handleItemTouchTap}>
        <Link to="profile"><MenuItem action="profile" primaryText="Profile"/></Link>
        <MenuItem action="logout" primaryText="Sign out"/>
      </Menu>
    </Popover>
  </div>
);

export default HeaderMenu;